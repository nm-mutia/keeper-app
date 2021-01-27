// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/keeperDB", 
    {useNewUrlParser: true, useUnifiedTopology: true});

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
  });
const Note = new mongoose.model("Note", noteSchema);



////////////////////////////////////////////////// notes //////////////////////////////////////

app.route("/api/notes")
    .get(function(req, res){
        Note.find(function(err, foundNotes){
            if(!err){
                res.send(foundNotes);
            }else{
                res.send(err);
            }
        });
    })
    .post(function(req, res){
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content
        });
        console.log(req.body);
        newNote.save(function(err){
            if(!err){
              res.send("Successfully stored in database.");
            } else{
              res.send(err);
            }
        });
    });



//////////////////////////////////////////// note ////////////////////////////////////

app.route("/api/notes/:id")
    .get(function(req, res){
        Note.findOne({_id: req.params.id}, function(err, foundNote){
            if(!err){
                if(foundNote){
                    res.send(foundNote);
                } else{
                    res.send("No notes matching that id was found.");
                }
            } else{
                res.send(err);
            }
        });
    })
    .delete(function(req, res){
        Note.deleteOne({_id: req.params.id}, function(err){
          if(!err){
            res.send("Successfully deleted article");
          } else{
            res.send(err);
          }
        });
    });



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 3080, function() {
    console.log("Server started on port 3080");
});





