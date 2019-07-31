// Type definitions for react-native-tcp
// Project: https://github.com/PeelTechnologies/react-native-tcp
// Definitions by: Felipe Ghiggi <https://github.com/fghiggi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7.2
declare module '@secullum/react-native-tcp' {
    import * as React from "react";
    import * as ReactNative from "react-native";

    class Socket {
        write: (chunk: any, callback: () => void) => void;
        destroy: () => void;
        on: (event: string, callback: (error: any) => void) => void;
    }

    export const createConnection: (port: Number, ip: string, callback: () => void) => Socket;
}