import db from '../lib/database.js' 
 import { canLevelUp } from '../lib/levelling.js' 
  
 export function before(m) { 
     let user = db.data.users[m.sender] 
     if (!user.autolevelup) 
         return !0 
     let before = user.level * 1 
     while (canLevelUp(user.level, user.exp, global.multiplier)) 
         user.level++ 
  
     if (before !== user.level) { 
         user.role = global.rpg.role(user.level).name 
         m.reply(` 
 CONGRATULATTIONS, ${this.getName(m.sender)} LEVELED UP﹗ 
 • 🏅 PREVIOUS LEVEL : ${before} 
 • 🏅 NEW LEVEL : ${user.level} 
 • 🏅 ROLE : ${user.role} 
 ᴜsᴇ *.profile* ᴛᴏ ᴄʜᴇᴄᴋ 
         `.trim()) 
     } 
 } 
 export const disabled = true