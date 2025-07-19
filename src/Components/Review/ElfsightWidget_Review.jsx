import { useEffect } from "react";
import "./ElfsightWidget_Review.css"

function ElfsightWidget_Review() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="elfsight-app-6cb97e46-c0ec-4302-b950-0dccab70aa15 review_comments" data-elfsight-app-lazy></div>
            <div className="elfsight-app-5c99c119-de99-4aeb-befb-95ef44f1ca9a review_comments_responsive" data-elfsight-app-lazy></div>
        </>
    );
}

export default ElfsightWidget_Review;
