import React, { ComponentType } from 'react';
import withTranslationType from '../proptypes/WithTranslationType';

const translations = new Map<string, string>()
translations.set('dummy', 'dummy translated');

const withTranslation = <T extends {}>(WrappedComponent: ComponentType<T>) => {

    const translate = (key: string) => {
        return translations.has(key) ? translations.get(key) : `missing_${key}`;
    }

    return (props: Omit<T, keyof withTranslationType>) => {
        return (
            <WrappedComponent
                t={translate}
                {...props as T} />
        )
    }
}

export default withTranslation;