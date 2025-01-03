import { IconExplore, IconPlay } from "../components/icons"
import { IMenuItem } from "../app/types"


export const menuItems: IMenuItem[] = [
    {
        url: "/",
        title: "Khu vực học tập",
        icon: <IconPlay className="size-5" />,
    },
    {
        url: "/explore",
        title: "Khám phá",
        icon: <IconExplore className="size-5" />,
    },
]
