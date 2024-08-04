import { ActiveLink } from "@/components/basic";

function getTextStyles(text: any) {
  if (text.bold == true) {
    return <b>{text.text}</b>;
  }
  if (text.italic == true) {
    return <i>{text.text}</i>;
  }
  if (text.underline == true) {
    return <u>{text.text}</u>;
  }
  if (text.strikethrough == true) {
    return <s>{text.text}</s>;
  }
  if (text.code == true) {
    return <code>{text.text}</code>;
  }
  if (text.url == true) {
    return <ActiveLink href={text.url}>{text.text}</ActiveLink>;
  }
  return text.text;
}

function getList(list: any) {

  if (list.type == "list") {
    const { format, children } = list;

    // process children for nested lists

    // if previous list item exist then move list to previous list item
    // if not exist then create new list item and add list to it
    const listChildren = [...children];
    listChildren.forEach((c: any, index: number) => {
      if (c.type == "list") {
        if (index > 0) {
          if (listChildren[index - 1].type == "list-item") {
            listChildren[index - 1].children.push(c);
            listChildren.splice(index, 1);
          }
        } else {
          listChildren[index] = {
            type: "list-item",
            children: [c],
          };
        }
      }
    });

    const elements = listChildren.map((c: any) => {
      if (c.type.includes("list")) {
        return getList(c);
      } else {
        return getTextStyles(c);
      }
    });

    if (format == "unordered") {
      return <ul>{elements}</ul>;
    } else {
      return <ol>{elements}</ol>;
    }

  }

  if (list.type == "list-item") {
    const { children } = list;

    const elements = children.map((c: any) => {
      if (c.type.includes("list")) {
        return getList(c);
      } else {
        return getTextStyles(c);
      }
    });

    return <li>{elements}</li>;
  }

  return <></>;

}

function getRichTextBlocks(block: any, attrs: any = {}) {
  if (!block || !block.type) return <></>;

  if (block.type == "heading") {
    const { level, children } = block;

    const elements = children.map((c: any) => {
      return getTextStyles(c);
    });

    if (level == 1) {
      return <h1>{elements}</h1>;
    }
    if (level == 2) {
      return <h2>{elements}</h2>;
    }
    if (level == 3) {
      return <h3>{elements}</h3>;
    }
    if (level == 4) {
      return <h4>{elements}</h4>;
    }
    if (level == 5) {
      return <h5>{elements}</h5>;
    }
    if (level == 6) {
      return <h6>{elements}</h6>;
    }
  }

  if (block.type == "paragraph") {
    const { children } = block;

    const elements = children.map((c: any) => {
      return getTextStyles(c);
    });

    return <p {...attrs}>{elements}</p>;
  }

  if (block.type == "code") {
    const { children } = block;

    const elements = children.map((c: any) => {
      return getTextStyles(c);
    });

    return <code>{ elements }</code>
  }
  
  if (block.type == "quote") {
    const { children } = block;

    const elements = children.map((c: any) => {
      return getTextStyles(c);
    });

    return <blockquote>{ elements }</blockquote>
  }

  if (block.type == "list") {
    return getList(block);
  }

  return <></>
}

export { getRichTextBlocks };
