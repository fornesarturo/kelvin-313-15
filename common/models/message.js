'use strict';

module.exports = function(Message) {

  Message.getMessages = function (clubId, bookId, cb) {
    if (clubId && bookId) {
      Message.find({where: {and: [{clubId: clubId}, {bookId: bookId}]}}, function (err, messages) {
        if (err) return cb(err);
        cb(null, messages);
      });
    } else if (bookId) {
      Message.find({where: [{bookId: bookId}, {clubId: null}]}, function (err, messages) {
        if (err) return cb(err);
        cb(null, messages);
      });
    } else {
      return cb({status:400, message:'Unavailable service'});
    }
  }

  Message.remoteMethod(
    'getMessages', {
      'accepts': [
        { arg: 'clubId', type: 'string', required: false },
        { arg: 'bookId', type: 'string', required: false } 
      ],
      'returns': { arg: 'data', type: 'object' }
    }
  )
};
