var config = require('./config/config.json')
var private = require('./config/private.json')
var Discord = require('discord.js')
var bot = new Discord.Client()

bot.login(private.token)