import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const AddUser: React.FC<any> = ({ fetchData }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const adduser = await axios.post(`${API_BASE_URL}/users`, value);
      const response = adduser.data;
      if (response.success) {
        toast.success(response.message);
      }
      fetchData();
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setValue({
      name: "",
      email: "",
    });
  };

  return (
    <div className="flex justify-center items-center text-center flex-col gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-slate-800 text-white">Add User</Button>
        </DialogTrigger>
        <DialogContent className="bg-black text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex justify-start items-start flex-col gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={value.name}
                  name="name"
                  onChange={handleOnchange}
                  required
                  className="w-full bg-black"
                />
              </div>

              <div className="flex justify-start items-start flex-col gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={value.email}
                  name="email"
                  onChange={handleOnchange}
                  required
                  className="w-full bg-black"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Add</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
