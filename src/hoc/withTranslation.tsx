import React, {Component, ComponentType} from 'react';
import withTranslationType from '../proptypes/WithTranslationType';

const withTranslation = <T extends {}>(WrappedComponent: ComponentType<T>) => {
    const translations = new Map<string, string>()
    translations.set('dummy', 'dummy translated');

    const translate = (key: string) => {
        return translations.has(key) ? translations.get(key) : `missing_${key}`;
    }

    return class Translation extends Component<Omit<T, keyof withTranslationType>> {
        render() {
            return (
                <WrappedComponent
                    t={translate}
                    {...this.props as T} />
            )
        }
    }
}

export default withTranslation;