let db = require("../models/index");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
const forge = require("node-forge");

function verifySignature(message, signature, publicKey) {
  const publicKeyObject = forge.pki.publicKeyFromPem(publicKey);
  const md = forge.md.sha256.create();
  md.update(message, "utf8");
  const signatureBytes = forge.util.decode64(signature);
  const isValid = publicKeyObject.verify(md.digest().bytes(), signatureBytes);
  return isValid;
}

function userLogin(username, message, signature) {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUsername(username);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["id", "username", "image", "role", "publicKey"],
          where: { username: username },
          raw: true,
        });
        if (user) {
          let check = verifySignature(message, signature, user.publicKey);
          if (check) {
            userData.status = "success";
            userData.user = user;
          } else {
            userData.status = "error";
          }
        } else {
          userData.status = "error";
        }
      } else {
        userData.status = "error";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
}

function checkUsername(username) {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { username: username },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
}

function userRegister(data) {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUsername(data.username);
      if (!isExist) {
        await db.User.create({
          username: data.username,
          email: data.email,
          publicKey: data.publicKey,
          role: 0,
        });
        const token = jwt.sign(
          {
            username: data.username,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES,
          }
        );
        userData.status = "success";
      } else {
        userData.status = "error";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
}

function userVerify(token) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {};
      const username = await jwt.verify(token, process.env.JWT_SECRET);
      let user = await db.User.findOne({
        where: { username: username.username },
      });
      if (user) {
        user.save();
        data.status = "success";
      } else {
        data.status = "error";
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

function getAllUsers(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      let user = "";
      if (userId === "all") {
        user = await db.User.findAll({
          attributes: {
            exclude: ["publicKey"],
          },
        });
      }
      if (userId && userId !== "all") {
        user = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["publicKey"],
          },
        });
      }
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
}

function getProfile(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      data = {};
      findImage = await db.Image.findAll({
        where: { idUser: userId },
        raw: true,
      });
      data.numOfImage = findImage.length;
      data.like = 0;
      data.image = [];
      for (let i = 0; i < findImage.length; i++) {
        data.like = data.like + findImage[i].numOfLike;
        data.image.push(findImage[i].id);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

function changeName(userId, name) {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });
      let check = await db.User.findOne({
        where: { username: name },
      });
      if (user && !check) {
        user.username = name;
        user.save();
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  userLogin: userLogin,
  userRegister: userRegister,
  userVerify: userVerify,
  getAllUsers: getAllUsers,
  getProfile: getProfile,
  changeName: changeName,
};
