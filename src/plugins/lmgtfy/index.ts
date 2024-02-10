/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated, Samu and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { ApplicationCommandInputType, findOption, RequiredMessageOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

function lmgtfy(input: string): string {
  return `https://letmegooglethat.com/?q=${encodeURIComponent(input)}`;
}

export default definePlugin({
    name: "lmgtfy",
    description: "lmgtfy.com link generator",
    authors: [Devs.darq_],
    dependencies: ["CommandsAPI"],
    commands: [
        {
            name: "lmgtfy",
            description: "lmgtfy.com link generator",
            options: [RequiredMessageOption],
            execute: opts => ({
                content: lmgtfy(findOption(opts, "message", ""))
            }),
        },
    ]
});