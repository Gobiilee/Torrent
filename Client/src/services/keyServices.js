import forge from "node-forge";

function generateRSAKey(keyLength = 512) {
  const rsa = forge.pki.rsa.generateKeyPair({ bits: keyLength });
  return {
    publicKey: forge.pki.publicKeyToPem(rsa.publicKey),
    privateKey: forge.pki.privateKeyToPem(rsa.privateKey),
  };
}

function signMessage(privateKey, username) {
  privateKey = privateKey.trim();
  privateKey = privateKey.replace("-----BEGIN RSA PRIVATE KEY-----", "");
  privateKey = privateKey.replace("-----END RSA PRIVATE KEY-----", "");
  privateKey = privateKey.replace(/ /g, "\n");
  privateKey = "-----BEGIN RSA PRIVATE KEY-----" + privateKey + "-----END RSA PRIVATE KEY-----";
  const privateKeyObject = forge.pki.privateKeyFromPem(privateKey);
  const md = forge.md.sha256.create();
  const message = username;
  md.update(message, 'utf8');
  const signature = privateKeyObject.sign(md);
  return {
    signature: forge.util.encode64(signature),
    username: message,
  };
}

// return hash of file
function calculateFileHash(file) {
  const md = forge.md.sha256.create();
  md.update(file, 'utf8');
  return md.digest().toHex();
}

export const generateKey = {
  generateRSAKey,
  signMessage,
  calculateFileHash,
};
