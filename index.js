
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sewa_kendaraan"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

app.get("/penyewa", (req, res) => {
    let sql = "select * from penyewa"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                penyewa: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

app.get("/penyewa/:id", (req, res) => {
    let data = {
        id_penyewa: req.params.id
    }
    // create sql query
    let sql = "select * from penyewa where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                penyewa: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data 
app.post("/penyewa", (req,res) => {

    // prepare data
    let data = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }

    // create sql query insert
    let sql = "insert into penyewa set ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

app.put("/penyewa", (req,res) => {

    // prepare data
    let data = [
        // data
        {
            nama: req.body.nama,
            nama_siswa: req.body.nama_siswa
        },

        // parameter (primary key)
        {
            id_penyewa: req.body.id_penyewa
        }
    ]

    // create sql query update
    let sql = "update penyewa set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) // send response
    })
})

app.delete("/penyewa/:id", (req,res) => {
    // prepare data
    let data = {
        id_penyewa: req.params.id
    }
    let sql = "delete from penyewa where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

app.get("/kendaraan", (req, res) => {
    let sql = "select * from kendaraan"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                kendaraan: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

app.get("/kendaraan/:id", (req, res) => {
    let data = {
        id_kendaraan: req.params.id
    }
    // create sql query
    let sql = "select * from kendaraan where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                kendaraan: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data 
app.post("/kendaraan", (req,res) => {

    // prepare data
    let data = {
        nopol: req.body.nopol,
        warna: req.body.warna,
        kondisi: req.body.kondisi
    }

    // create sql query insert
    let sql = "insert into kendaraan set ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

app.put("/kendaraan", (req,res) => {

    // prepare data
    let data = [
        // data
        {
            nopol: req.body.nopol,
            warna: req.body.warna,
            kondisi: req.body.kondisi
        },

        // parameter (primary key)
        {
            id_kendaraan: req.body.id_kendaraan
        }
    ]

    // create sql query update
    let sql = "update kendaraan set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) // send response
    })
})

app.delete("/kendaraan/:id", (req,res) => {
    // prepare data
    let data = {
        id_kendaraan: req.params.id
    }
    let sql = "delete from kendaraan where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

app.get("/admin", (req, res) => {
    let sql = "select * from admin"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                admin: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

app.get("/admin/:id", (req, res) => {
    let data = {
        id_admin: req.params.id
    }
    // create sql query
    let sql = "select * from admin where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                admin: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point menyimpan data 
app.post("/admin", (req,res) => {

    // prepare data
    let data = {
        nama: req.body.nama,
        status: req.body.status
    }

    // create sql query insert
    let sql = "insert into admin set ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

app.put("/admin", (req,res) => {

    // prepare data
    let data = [
        // data
        {
            nama: req.body.nama,
            status: req.body.status
        },

        // parameter (primary key)
        {
            id_admin: req.body.id_admin
        }
    ]

    // create sql query update
    let sql = "update admin set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) // send response
    })
})

app.delete("/admin:id", (req,res) => {
    // prepare data
    let data = {
        id_admin: req.params.id
    }
    let sql = "delete from admin where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) // send response
    })
})

app.listen(6000, () => {
    console.log("here we go")
})

