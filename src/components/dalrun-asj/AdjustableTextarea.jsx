import { useEffect, useState, useRef } from "react";

function AdjustableTextarea({val, setVal, handleInput, placeholder, readOnly}) {
    const [textareaHeight, setTextareaHeight] = useState("");
    const textareaRef = useRef();

    useEffect(() => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            if (textarea.value === "") {
                setTextareaHeight(0);
            } else {
                const previousHeight = textarea.scrollHeight;
                setTextareaHeight(previousHeight);
                textarea.style.height = `${previousHeight}px`;
            }
        }
    }, [textareaRef.current, val]);

    return(
        <>
            <textarea
                ref={textareaRef}
                style={{ height: `${Math.max(37, textareaHeight)}px` }} // 입력한 내용에 맞게 높이 조정
                value={val}
                placeholder={placeholder}
                readOnly={readOnly}
                onInput={(e) => {
                        if(handleInput !== undefined) handleInput(e);
                        if(setVal !== undefined) setVal(e.target.value);
                        
                        const textarea = e.target;
                        if(textarea.value === "") {  
                            setTextareaHeight(0); 
                        } else {
                            setTextareaHeight(textarea.scrollHeight);
                            textarea.style.height = `${textarea.scrollHeight}px`
                        }
                    }
                }     
            />
        </>
    );
}

export default AdjustableTextarea;