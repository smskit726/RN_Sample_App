import { ParamListBase, createNavigationContainerRef } from "@react-navigation/native";

const navigationRef = createNavigationContainerRef<ParamListBase>();

const navigate = (name: string, params?: object) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export {navigationRef, navigate};