import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { IoIosStopwatch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";


export const categories = [
  { name: "New", icon: <AiFillHome className="doms"/>, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment className="doms"/>, type: "category" },
  { name: "Subscriptions", icon: <MdSubscriptions className="doms"/>, type: "category" },
  { name: "Library", icon: <FaRegFolder className="doms"/>, type: "category" },
  { name: "Watch later", icon: <FaRegFile className="doms"/>, type: "category" },
  { name: "Favourites", icon: <IoIosStopwatch className="doms"/>, type: "category" },
  { name: "Liked videos", icon: <FaRegHeart className="doms"/>, type: "category" },
  { name: "Music", icon: <IoMusicalNotesOutline className="doms"/>, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <MdFeedback className="doms"/>,
    type: "category",
    divider: true,
  },

];
