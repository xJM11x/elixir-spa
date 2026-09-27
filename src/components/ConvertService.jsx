import ReactMarkdown from 'react-markdown';

const ConvertService = ({content}) => 
{
    return(
        <div>
            <ReactMarkdown
                components={{
                h1: ({ node, ...props }) => <h1 className="text-[#485935] text-[24px] md:text-[32px] font-bold font-playfair-display" {...props} />,
                h2: ({ node, ...props }) => <h1 className="my-[15px] text-[#000000] font-bold font-open-sans text-[14px] md:text-[16px]" {...props} />,                      
                h3: ({ node, ...props }) => <h1 className="text-[#485935] mb-[10px] text-[20px] md:text-[28px] font-bold font-playfair-display" {...props} />,                      
                p: ({ node, ...props }) => <p className="text-[#000000] font-open-sans text-[12px] md:text-[14px]" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-5 text-[#000000] font-open-sans text-[12px] md:text-[14px]" {...props} />,
            }}>
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default ConvertService;