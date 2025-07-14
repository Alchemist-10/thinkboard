
import { Zap } from "lucide-react";

const RatelimitedUI = () => {
    return (
        <div
            className="alert px-3 w-3/4 mx-auto flex"
            style={{ borderColor: "green" }} // Change this color as needed
        >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"  >
                <Zap color="red" />
            </div>
            {/* Optional: match icon color */}
            <div>
                <h3 className="font-bold">Rate Limit Reached</h3>
                <div className="text-xs">
                    You've made too many requests in a short period. Please wait a moment.

                    Try again in a few seconds for the best experience.
                </div>
            </div>
        </div>
    );
};

export default RatelimitedUI;
