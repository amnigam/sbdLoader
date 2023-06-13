const mongoose = require('mongoose'); 

const scrnSchema = mongoose.Schema(
    {
        domain: {
            type: String,
            required: true
        },
        desc: {
            type: String,            
        },
        sbdID: {
            type: String,
            required: true,
            unique: true
        },
        qn: {
            type: Array,
            required: true
        },
        act: {
            type: Array,
        },
        sl: {
            type: String,
            required: true,
            uppercase: true
        }
    }
); 

const Screener = mongoose.model('Screener', scrnSchema); 
module.exports = Screener; 
