import { Component } from 'react';
import isAbsoluteUrl from 'is-absolute-url';
import { isUndefined, isNull } from 'lodash';

function CustomEvent(event, params) {
    params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined,
    };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
    );
    return evt;
}
CustomEvent.prototype = window.Event.prototype;

function isExternalLink(external_link, href) {
    if (isUndefined(external_link) || isNull(external_link)) {
        return isAbsoluteUrl(href);
    }
    return external_link;
}

class UtilsLink extends Component {
    constructor(props) {
        super(props);
        this.updateLocation = this.updateLocation.bind(this);
    }

    updateLocation(e) {
        const hasModifiers = e.metaKey || e.shiftKey || e.altKey || e.ctrlKey;
        if (hasModifiers) {
            return;
        }
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }
        if (this.props.preOnClick) {
            this.props.preOnClick();
        }
        const { external_link, href } = this.props;
        if (href && !isExternalLink(external_link, href)) {
            // prevent anchor from updating location
            e.preventDefault();
            const { href } = this.props;
            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
            // scroll back to top
            window.scrollTo(0, 0);
        }
    }

    render() {
        const {
            children,
            external_link,
            preOnClick,
            target,
            href,
            download,
            disabled,
            ...otherProps
        } = this.props;
        const linkIsExternal = href && isExternalLink(external_link, href);

        return (
            <a
                href={href}
                target={linkIsExternal ? target : null}
                download={download && linkIsExternal ? download : null}
                disabled={disabled}
                {...otherProps}
                onClick={(e) => this.updateLocation(e)}
            >
                {children}
            </a>
        );
    }
}

export { UtilsLink };
