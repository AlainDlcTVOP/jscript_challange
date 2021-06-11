export function htmlEndTagByStartTag(startTag: string): string {

    const stringTag = startTag.split(' ');
    const splitTag = stringTag[0].toString().split('');
    let endTag = '</';

    for (let i = 1; i < splitTag.length; i++) {
        endTag += splitTag[i];
    }

    endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += '>';

    return endTag;

}

console.log(htmlEndTagByStartTag("<button type='button'  64564564 disabled>" + 544));
console.log(htmlEndTagByStartTag('<i>'));