const Screener = require('./../models/screener'); 

module.exports.showForm = (req, res) => {
    res.render('datajacket'); 
}

let finalObj = {}; 

module.exports.buildData = (req, res, next) => {
    console.log(req.body); 
    const respEntries = Object.entries(req.body); 
    const actArr = extractActivities(respEntries); 

    finalObj.domain = req.body.domain;
    finalObj.desc = req.body.description;
    finalObj.sbdID = req.body.sbdID;
    finalObj.qn = []; 
    finalObj.qn.push(req.body.q2);
    finalObj.qn.push(req.body.q1); 
    finalObj.act = actArr; 
    finalObj.sl = req.body.sl; 
    // console.log(actArr); 
    // console.log(respEntries); 
    next(); 
}

module.exports.commitData = (req, res) => {
    let item; 
    console.log('Final Object to be committed to DB ', finalObj); 
    async function commitToDb() {
        try {
            item = await Screener.create(finalObj); 
            res.status(200).json(item); 
        } catch (err) {
            console.log(err.message); 
            res.status(500).send('Error Committing to Database!'); 
        }
    }
    commitToDb(); 
}

// Function takes an array containing Key/Value pairs of the responses captured and returns
// an array containing the actvities     
function extractActivities(entries) {
    let actList = []; 
    entries.forEach( (el) => {
        if (el[0].slice(0,3) === 'act'){        // Slice(0,n) doesn't include n. Slice is used for STRINGS here.
            actList.push(el[1]);
        };
    })
    return actList; 
}