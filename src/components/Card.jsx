import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";

function Card({ data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden flex-shrink-0">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-8 h-8 bg-zinc-500 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 flex ${data.tag.tagColor === "blue"? "bg-blue-600":"bg-green-600"} items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
