const {validationResult} = require('express-validator')
const  mongoose  = require('mongoose');

const HttpError = require('../models/http-error');
const Information = require('../models/information');

const createinformation = async (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new HttpError('invalid inputs passsed ,please check your data',422)); 
    }

    const {name,email,dob,address,country} = req.body;
    

    const createdInformation = new Information({
        name,
        email,
        dob: new Date(dob),
        address,
        country
    });
    
    let emailExist;
    try {
        emailExist = await Information.find({email:createdInformation.email})
        console.log(emailExist)
    } catch (err) {
        const error =new HttpError('Creating information failed,try again',500);
        return next(error);
    }

    if(emailExist.length !== 0){
        const error = new HttpError('email is exist please try different email ',500);
        return next(error);}


    try {
        await createdInformation.save()
    } catch (err) {
        console.log(err)
        const error = new HttpError('Creating place failed, please try again.',500);
        return next(error);
    }
    res.status(201).json({Information:createdInformation.toObject({ getters:true})})
};

const getInformation = async (req,res,next) =>{
    let allinformation;
    try {
        allinformation = await Information.find();
    } catch (err) {
        const error = new HttpError('Something went wrong , could not find a place',500);
        return next(error);
    }
    res.json({allinformation:allinformation}) ; 
}

const updateInformation = async(req,res,next) =>{
    const errors = validationResult(req);
  if(!errors.isEmpty()){
    console.log(errors);
    return next(new HttpError('invalid inputs passsed ,please check your data',422));
  }
  const {name,dob,address,country} = req.body;
  const infoId = req.params.iid 

  let updatedInformation;
  try {
    updatedInformation = await Information.findById(infoId);
  } catch (err) {
    const error =new HttpError('Something went wrong ,could not update place',501);
    return next(error);
  }

  updatedInformation.name = name;
  updatedInformation.dob = dob;
  updatedInformation.address = address;
  updateInformation.country = country;
  try {
    await updatedInformation.save();
  } catch (err) {
    const error = new HttpError('Something went wrong ,could not update place',500);
    return next(error);
  }
  res.status(200).json({updatedInformation:updatedInformation})
}

const deleteInformation = async (req,res,next)=>{
    const infoId = req.params.iid;

    let deletedInformation;
    try {
        deletedInformation = await Information.findById(infoId);
    } catch (err) {
        const error = new HttpError('something went wrong , could not delete place',500);
        return next(error);
    }
    if(!deletedInformation){
        const error = new HttpError('Could not find information for this id ',404);
        return next(error);
    }
    try {
        await deletedInformation.remove();
    } catch (err) {
        const error = new HttpError('something went wrong , could not delete place',500);
        return next(error);
    }
    res.json({deletedInformation:deletedInformation})
}

exports.createInformation = createinformation;
exports.getInformation = getInformation;
exports.updateInformation = updateInformation;
exports.deleteInformation =deleteInformation; 