import {
  convertToDatabase,
  convertFromDatabase,
} from '../../../../src/utils/mapping/activity';

describe('convert message to database', () => {
  test('required params only', () => {
    const msgObj = {
      id: '3409543',
      accountId: '12345',
      msg: 'test message',
      params: '',
      interpret: true,
      created_at: new Date(),
    };

    expect(convertToDatabase(msgObj)).toEqual({
      id: msgObj.id,
      accountId: '12345',
      heading: '',
      msg: msgObj.msg,
      params: msgObj.params,
      version: 1,
      display: true,
      interpret: msgObj.interpret,
      created_at: msgObj.created_at,
    });
  });
});

describe('convert message from database', () => {
  test('simple', () => {
    const message = {
      id: 'testmessage',
      accountId: '12345',
      heading: '',
      msg: 'test Message',
      params: '',
      version: 1,
      display: true,
      interpret: true,
      created_at: '737545435435',
    };

    expect(convertFromDatabase(message)).toEqual({
      id: message.id,
      accountId: '12345',
      msg: message.msg,
      params: message.params,
      interpret: message.interpret,
      created_at: message.created_at,
    });
  });
});

