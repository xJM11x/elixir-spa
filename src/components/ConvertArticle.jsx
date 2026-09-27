import ReactMarkdown from 'react-markdown';

export default function AutoFormattedArticle({content}) {
    return (
    <div className="max-w-[625px] prose prose-lg">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className=" text-[22px] sm:text-[24px] md:text-[30px] font-bold mb-4 text-[#485935] font-playfair-display" {...props} />,
          p: ({ node, ...props }) => <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-8 mb-4 text-[#000000] font-open-sans" {...props} />,
          ul: ({ node, ...props }) => <ul className="text-[14px] sm:text-[16px] md:text-[18px] not-[]:list-disc list-inside mb-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-2" {...props} />,
          img: ({ node, ...props }) => (
            <img
            className="w-full object-cover rounded-[8px] aspect-video"
            alt={props.alt}
            {...props}
            />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}