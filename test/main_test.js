const mocha = require("mocha");
const assert = require("assert");
const keys = require("../config/keys");
require("../models/User");
const mongoose = require("mongoose");
const User = mongoose.model("users");

before(done => {
  mongoose.connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  );
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => {
      console.warn("Error", error);
    });
});

//save mongo user test
describe("saving records", () => {
  it("saves a record to the database", done => {
    const user = new User({
      googleId: "123123123",
      firstName: "Joe"
    });

    user.save().then(() => {
      assert(!user.isNew);
    });
    done();
  });
});

describe("Deleting a user", () => {
  let user;

  beforeEach(done => {
    user = new User({ googleId: "123123123", firstName: "Joe" });
    user.save().then(() => done());
  });

  it("model instance remove", done => {
    user
      .remove()
      .then(() => User.findOne({ firstName: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method deleteMany", done => {
    //remove a bunch of records with some given criteria
    User.deleteMany({ firstName: "Joe" })
      .then(() => User.findOne({ firstName: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method deleteOne", done => {
    User.deleteOne({ firstName: "Joe" })
      .then(() => User.findOne({ firstName: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method findByIdAndDelete", done => {
    User.findByIdAndDelete(user._id)
      .then(() => User.findOne({ firstName: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
});

beforeEach(done => {
  const { users } = mongoose.connection.collections;
  users.drop(() => {
    done();
  });
});
