import { defineStore } from "pinia";
import { Howl } from "howler";

/* *--------------------- types ------------------------ */
import type { ISongMeta } from "@/types/manage-types";

/* *--------------------- helpers ------------------------ */
import helper from "@/helpers/helper";

const useMusicStore = defineStore("musicStore", {
    state: () => {
        return {
            currentSong: {} as ISongMeta | object,
            sound: {} as Howl,
            seek: "00:00" as string,
            duration: "00:00" as string,
            playerProgress: "0%" as string,
        };
    },
    actions: {
        async playMusic(song: ISongMeta): Promise<void> {
            if (
                this.currentSong !== song &&
                !Object.keys(this.currentSong).length
            ) {
                this.currentSong = song;

                this.sound = new Howl({
                    src: [song.fileUrl],
                    html5: true,
                });

                this.sound.play();

                this.sound.on("play", () => {
                    requestAnimationFrame(this.progress);
                });
            } else {
                this.sound.stop();
                this.currentSong = {};
                this.playMusic(song);
            }
        },
        async toggleMusic(): Promise<void> {
            if (!Object.keys(this.currentSong).length) return;
            if (this.sound.playing()) {
                this.sound.pause();
            } else {
                this.sound.play();
            }
        },
        progress() {
            this.seek = helper.formatTime(this.sound.seek());
            this.duration = helper.formatTime(this.sound.duration());

            this.playerProgress = `${(
                (this.sound.seek() / this.sound.duration()) *
                100
            ).toFixed(2)}%`;

            if (this.sound.playing()) {
                requestAnimationFrame(this.progress);
            }
        },
    },
    getters: {
        isPlaying: (state): boolean => {
            if (state.sound.playing) {
                return state.sound.playing();
            }

            return false;
        },
    },
});

export { useMusicStore };
