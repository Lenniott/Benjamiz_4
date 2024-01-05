import {ColorPalette} from "../components/molicules/colours.tsx"
import {Typography} from "../components/molicules/typographyDoc.tsx"
import {Components} from "../components/molicules/components.tsx"


export function DesignSystem() {
    return (
        <>
        <div className="min-h-screen">

            <Typography />
            <ColorPalette />
            <Components />
        </div>
        </>
    )
}