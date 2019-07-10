import React, { ComponentType, forwardRef, Ref } from 'react';
import withTranslationType from '../proptypes/WithTranslationType';

const translations = new Map<string, string>()
translations.set('dummy', 'dummy translated');

const withTranslation = <RefType, OriginalProps>(
    WrappedComponent: ComponentType<OriginalProps & withTranslationType>
    ) => {

    const translate = (key: string) => {
        return translations.has(key) ? translations.get(key) : `missing_${key}`;
    };

    type PrivateProps = {forwardedRef: Ref<RefType>};

    type Props = OriginalProps & PrivateProps;

    const render = (props: Props) => {
        const {
            forwardedRef,
            ...restProps
        } = props as PrivateProps;

        return (
            <WrappedComponent
                t={translate}
                ref={forwardedRef}
                {...restProps as OriginalProps} />
        )
    }

    return forwardRef<RefType, OriginalProps>(
        (props: Readonly<OriginalProps>, ref: Ref<RefType>) =>
            render({...props, forwardedRef: ref})
    )
}

export default withTranslation