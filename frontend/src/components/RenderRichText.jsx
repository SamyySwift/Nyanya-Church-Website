export const RenderText = ({ content }) => {
  return (
    <div className="space-y-4">
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-xl md:text-2xl">
              {block.children.map((child, childIndex) => {
                // Split text by newlines and render each line
                const lines = child.text.split('\n');
                return (
                  <span
                    key={childIndex}
                    className={`
                        ${child.bold ? "font-bold" : ""}
                        ${child.italic ? "italic" : ""}
                        ${child.underline ? "underline underline-offset-2" : ""}
                        ${child.strikethrough ? "line-through" : ""}
                      `}
                  >
                    {lines.map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                );
              })}
            </p>
          );
        }

        if (block.type === "list") {
          return block.format === "unordered" ? (
            <ul key={index} className="list-disc list-inside">
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.children.map((child, childIndex) => {
                    // Handle line breaks in list items too
                    const lines = child.text.split('\n');
                    return (
                      <span
                        key={childIndex}
                        className={child.strikethrough ? "line-through" : ""}
                      >
                        {lines.map((line, lineIndex) => (
                          <span key={lineIndex}>
                            {line}
                            {lineIndex < lines.length - 1 && <br />}
                          </span>
                        ))}
                      </span>
                    );
                  })}
                </li>
              ))}
            </ul>
          ) : (
            <ol key={index} className="list-decimal list-inside">
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.children.map((child, childIndex) => {
                    // Handle line breaks in ordered list items too
                    const lines = child.text.split('\n');
                    return (
                      <span
                        key={childIndex}
                        className={child.strikethrough ? "line-through" : ""}
                      >
                        {lines.map((line, lineIndex) => (
                          <span key={lineIndex}>
                            {line}
                            {lineIndex < lines.length - 1 && <br />}
                          </span>
                        ))}
                      </span>
                    );
                  })}
                </li>
              ))}
            </ol>
          );
        }

        return null;
      })}
    </div>
  );
};
