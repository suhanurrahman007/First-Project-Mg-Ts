import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type UserName =  {
    firstName: string;
    middleName: string;
    lastName: string
  };

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: number;
  motherName: string;
  motherOccupation: string;
  motherContactNo: number;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: number;
  address: string;
  email: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: number;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
