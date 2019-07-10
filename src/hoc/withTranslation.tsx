import React, { ComponentType, Component, RefObject, forwardRef } from 'react';
import withTranslationType from '../proptypes/WithTranslationType';

const translations = new Map<string, string>()
translations.set('dummy', 'dummy translated');

const withTranslation = <RefType, OriginalProps>(
    WrappedComponent: ComponentType<OriginalProps & withTranslationType>
    ) => {

    type PrivateProps = {forwardedRef: RefObject<RefType>};

    type Props = OriginalProps & PrivateProps;

    class Translation extends Component<Props> {
        translate = (key: string) => {
            return translations.has(key) ? translations.get(key) : `missing_${key}`;
        };

        render() {
            const {
                forwardedRef,
                ...restProps
            } = this.props as PrivateProps;

            return (
                <WrappedComponent
                    t={this.translate}
                    ref={forwardedRef}
                    {...restProps as OriginalProps} />
            )
        }
    }

    const RefForwardingFactory = (props: Readonly<Props>, ref: RefType) => (
        <Translation {...props} forwardedRef={ref}/>
    )

    return forwardRef<RefType, OriginalProps>(RefForwardingFactory as any)
}

export default withTranslation