const { exec } = require('child_process')

function funExec(commd) {
    return new Promise(resolve => {
        try {
            exec(commd, (err, stdout) => {
                if (err) return resolve(null)
                resolve(stdout)
            })
        } catch (error) {
            resolve(null)
        }
    })
}

module.exports = {
    funExec
}
