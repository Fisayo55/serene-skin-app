import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="">
          <span className="text-lg font-primary btn flex mt-5 justify-center items-center  cursor-pointer">
            Watch Video
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={"https://www.youtube.com/watch?v=Er5a7snyQKM"}
          muted
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
