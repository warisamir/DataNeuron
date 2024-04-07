import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";

const HomePage = () => {
  return (
    <div className="h-[89dvh]">
      <ResizablePanelGroup  direction="vertical" className="w-full h-full">
        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={30}>
              <div className="flex justify-center items-center p-4 border h-full">
                <FirstComponent />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70}>
              <div className="flex justify-center items-center p-4 border h-full overflow-scroll no-scrollbar ps-28 lg:ps-0">
                <SecondComponent />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex justify-center items-start border h-full overflow-scroll no-scrollbar lg:pt-10 p-4 ps-4 lg:ps-0">
            <ThirdComponent />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default HomePage;
