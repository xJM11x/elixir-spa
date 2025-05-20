import ReactMarkdown from 'react-markdown';

export default function AutoFormattedArticle({content}) {
    return (
    <div className="max-w-[625px] prose prose-lg">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4 text-[#485935] font-playfair-display" {...props} />,
          p: ({ node, ...props }) => <p className="text-lg leading-8 mb-4 text-[#000000] font-open-sans" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
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