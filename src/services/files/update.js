import { isNilOrEmpty } from 'ramda-adjunct';
import { isMongoId } from 'validator';
import { File } from '../../models';

export const updateFileById = async (fileId, newFile) =>{
    const filter = fileId
    const update = newFile
    File.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc){
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
}

