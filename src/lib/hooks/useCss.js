import { create } from 'nano-css';
import { addon as addonCSSOM } from 'nano-css/addon/cssom';
import { addon as addonVCSSOM } from 'nano-css/addon/vcssom';
import { cssToTree } from 'nano-css/addon/vcssom/cssToTree';
import { useMemo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const nano = create();
addonCSSOM(nano);
addonVCSSOM(nano);

const useCss = (css) => {
    const className = useMemo(() => 'react-use-css-' + uuidv4(), []);
    const sheet = useMemo(() => new nano.VSheet(), []);
    useEffect(() => {
        const tree = {};
        cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return () => {
            sheet.diff({});
        };
    });
    return className;
};

export default useCss;