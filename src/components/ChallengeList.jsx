//rfce
import { BookCheck, Edit2Icon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ChallengeList = (props) => {
  const { challengeListData } = props;
  // console.log("cha=======", challengeListData)

  const hdlChallengeSelect = () => {
    console.log("Program no.=====", challengeListData.id)
    
  }

  return (
    <>
      <tr className="border text-gray-700">
        <td className="border px-4 py-2 text-center">
          {challengeListData.name}
        </td>
        <td className="border px-4 py-2">{challengeListData.heightCurrent}</td>
        <td className="border px-4 py-2">{challengeListData.weightCurrent}</td>
        <td className="border px-4 py-2">{challengeListData.bmi}</td>
        <td className="border px-4 py-2">{challengeListData.surveyResult}</td>
        <td className="border px-4 py-2 text-center">{challengeListData.weightTarget}</td>
        <td className="border px-4 py-2">{challengeListData.periodWeek}</td>
        <td className="border px-4 py-2 text-center">
          <button 
          className='bg-emerald-900 text-gray-100 px-2 py-1 rounded-md hover:bg-emerald-400 cursor-pointer font-semibold'
          onClick={() => hdlChallengeSelect(challengeListData.id)}
          >
          <Link to = {`/user/edit-result/${challengeListData.id}`} > <BookCheck /> </Link> 
          </button>
        </td>
        <td className="border px-4 py-2 text-center">
          <button className="bg-slate-200 text-gray-400">
            <Edit2Icon />
          </button>
        </td>
        <td className="border px-4 py-2 text-center">
          <button className='bg-emerald-900 text-gray-100 px-2 py-1 rounded-md hover:bg-emerald-400 cursor-pointer font-semibold'>
            <Trash2Icon />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ChallengeList;
