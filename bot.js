let TelegramBot = require('node-telegram-bot-api');
let parse = require('./parser.js');

const TOKEN = '876631294:AAGUaNDafctrbyA4kVS521H0J-XARP1k-7g';

let bot = new TelegramBot(TOKEN, {polling : true});

bot.onText(/\/closestpare (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  resp = parse.returnAll();

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
