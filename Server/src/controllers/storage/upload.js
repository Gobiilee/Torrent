const upload = require('../../services/storage/upload');
exports.upload = async (req, res) => {
    const file = req.file.buffer;
    const fileName = req.body.fileName;
    const fileType = req.file.mimetype;
    const hashValue = req.body.hashValue;
    if (true) {
        const fileId = await upload.upload(file, fileName, fileType);
        await upload.addDBimages(fileId, fileName, req.idUser, req.body.description, hashValue);
        const Tags = req.body.category;
        const listTag = Tags.split(',');
        for (let i = 0; i < listTag.length; i++) {
            listTag[i] = listTag[i].trim();
            const checktag = await upload.checkTag(listTag[i]);
            if (checktag) {
                await upload.addTag(listTag[i], fileId);
            }
        }
        res.json({ fileId: fileId });
    }
    else {
        res.json({ error: 'fail' });
    }
}