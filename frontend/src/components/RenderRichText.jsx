export const RenderText = ({ content }) => {
  return (
    <div className="space-y-4">
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-lg">
              {block.children.map((child, childIndex) => (
                <span
                  key={childIndex}
                  className={`
                      ${child.bold ? "font-bold" : ""}
                      ${child.italic ? "italic" : ""}
                      ${child.underline ? "underline underline-offset-2" : ""}
                      ${child.strikethrough ? "line-through" : ""}
                    `}
                >
                  {child.text}
                </span>
              ))}
            </p>
          );
        }

        if (block.type === "list") {
          return block.format === "unordered" ? (
            <ul key={index} className="list-disc list-inside">
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.children.map((child, childIndex) => (
                    <span
                      key={childIndex}
                      className={child.strikethrough ? "line-through" : ""}
                    >
                      {child.text}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          ) : (
            <ol key={index} className="list-decimal list-inside">
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {listItem.children.map((child, childIndex) => (
                    <span
                      key={childIndex}
                      className={child.strikethrough ? "line-through" : ""}
                    >
                      {child.text}
                    </span>
                  ))}
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
