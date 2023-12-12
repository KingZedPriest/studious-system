//Import needed Icons
import { RiCloseCircleFill } from "react-icons/ri";

type PopupProps = {
  onClose: () => void;
};

const Popup = ({ onClose }: PopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-black opacity-80 absolute inset-0"></div>
      <div className="relative w-96 md:w-[30rem] h-[30rem] flex flex-col gap-y-4 items-center justify-center bg-white p-4 text-center rounded-lg">
        <RiCloseCircleFill
          onClick={onClose}
          className="absolute top-0 right-0 p-2 cursor-pointer z-[999] text-black"
          size={40}
        />
        <iframe
          src={process.env.HELP_APP_WEBSITE_URL}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Popup;
