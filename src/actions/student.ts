"use server";
import {
  editStudent,
  editProfileImg,
  assignBatch,
  editStudentStatus,
  addNewStudent,
  assignStudentsToBatch,
  removeStudentsFromBatch,
} from "@/lib/student";

export const editStudentHandler = async (data: any) => {
  try {
    if (!data)
      return { code: "400", message: "Please fill valid credentials." };
    const res = await editStudent(data);
    return res;
  } catch (err) {
    const error = err as Error;
    console.log(error);
    return { message: error.message, hasError: true };
  }
};
export const editProfileImgHandler = async (data: any) => {
  try {
    if (!data) return { code: "400", message: "Please upload valid image." };
    console.log("image data in actions", data);
    const res = await editProfileImg(data);
    return res;
  } catch (err) {
    const error = err as Error;
    console.log(error);
    return { message: error.message, hasError: true };
  }
};

export const assignBatchHandler = async (data: any) => {
  try {
    if (!data) return { code: "400", message: "Please upload valid data." };
    const res = await assignBatch(data);
    return res;
  } catch (err) {
    const error = err as Error;
    console.log(error);
    return { message: error.message, hasError: true };
  }
};
export const editStudentStatusHandler = async (data: any) => {
  try {
    if (!data) return { code: "400", message: "please fill valid fields" };
    const res = await editStudentStatus(data);
    return res;
  } catch (err) {
    const error = err as Error;
    console.log(error);
    return { message: error.message, hasError: true };
  }
};

export const addNewStudentHandler = async (data: any) => {
  try {
    if (!data)
      return { code: "400", message: "Please fill valid credentials." };
    const res = await addNewStudent(data);
    return res;
  } catch (err) {
    const error = err as Error;
    console.log(error);
    return { message: error.message, hasError: true };
  }
};

export const assignStudentsToBatchHandler = async (data: any) => {
  try {
    if (!data)
      return { code: "400", message: "Please fill valid credentials." };
    const res = await assignStudentsToBatch(data);
    return res;
  } catch (err) {
    const error = err as Error;
    console.log(error);
    return { message: error.message, hasError: true };
  }
};

export const removeStudentsFromBatchHandler = async (data: any) => {
  try {
    if (!data)
      return { code: "400", message: "Please fill valid credentials." };
    const res = await removeStudentsFromBatch(data);
    return res;
  } catch (err) {
    const error = err as Error;
    console.log(error);
    return { message: error.message, hasError: true };
  }
};
