<template>
    <section class="container mx-auto mt-6">
        <div
            class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
            <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
                <!-- Comment Count -->
                <span class="card-title"
                    >Comments {{ commentList.length }}</span
                >
                <i
                    class="fa fa-comments float-right text-2xl text-green-400"
                ></i>
            </div>
            <div class="p-6">
                <comment-form
                    :validation-schema="commentValidationSchema"
                    @submit="addComment"
                >
                    <CommentInput
                        ref="commentInput"
                        name="comment"
                        type="text"
                        placeholder="Your comment here..."
                    />
                    <comment-submit-button type="submit"
                        >Submit</comment-submit-button
                    >
                </comment-form>
                <CommentSort @sort-by="sortBy" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- plugins ------------------------ */
import { auth } from "@/plugins/firebase-auth";
import {
    db,
    doc,
    setDoc,
    getDoc,
    onSnapshot,
    arrayUnion,
    updateDoc,
} from "@/plugins/firebase-firestore";

/* *--------------------- helpers ------------------------ */
import { CommentValidationSchema } from "@/helpers/comments-validation-schemas";

/* *--------------------- stores ------------------------ */
import { usePopupStore } from "@/stores/popup-store";

/* *--------------------- types ------------------------ */
import type { IComment } from "@/types/comments-types";

/* *--------------------- components ------------------------ */
import CommentForm from "@/components/AppForm.vue";
import CommentInput from "@/components/AppInput.vue";
import CommentSubmitButton from "@/components/AppButton.vue";
import CommentSort from "@/components/CommentSort.vue";

export default defineComponent({
    name: "SongForm",
    components: {
        CommentForm,
        CommentInput,
        CommentSubmitButton,
        CommentSort,
    },
    emits: ["update-comments", "sortBy"],
    data() {
        return {
            popupStore: usePopupStore(),
            commentValidationSchema: new CommentValidationSchema(),
            commentList: [] as Array<IComment>,
        };
    },
    mounted() {
        const docRef = doc(db, "comments", String(this.$route.params.id));

        onSnapshot(docRef, (doc) => {
            if (!doc.data()) return;

            this.commentList = [];
            this.commentList.push(
                ...(doc.data()?.comments.map((comment: IComment) => ({
                    username: comment.userName,
                    comment: comment.comment,
                    createdAt: comment.createdAt,
                })) as Array<IComment>),
            );
            this.$emit("update-comments", this.commentList);
        });
    },
    methods: {
        sortBy(sortMeth: string) {
            this.$emit("sortBy", sortMeth);
        },
        async getUser() {
            const usersref = doc(db, "users", String(auth.currentUser?.uid));
            const userSnap = (await getDoc(usersref)).data();
            return userSnap;
        },

        async addComment(
            values: { comment: string },
            { resetForm }: { resetForm: () => void },
        ): Promise<void> {
            try {
                const { name: userName } = (await this.getUser()) || {};

                const docRef = doc(
                    db,
                    "comments",
                    String(this.$route.params.id),
                );
                await setDoc(
                    docRef,
                    {
                        comments: arrayUnion({
                            userName: userName,
                            uid: auth.currentUser?.uid,
                            comment: values.comment,
                            createdAt: new Date().toUTCString(),
                        }),
                    },
                    { merge: true },
                );
                const songCollectionRef = doc(
                    db,
                    "songs",
                    String(this.$route.params.id),
                );
                const songDoc = await getDoc(songCollectionRef);
                const currentCount = songDoc.data()?.countOfComment || 0;
                await updateDoc(songCollectionRef, {
                    countOfComment: currentCount + 1,
                });

                this.popupStore.showMessage(
                    "Success",
                    "Comment added successfully.",
                    "Success",
                );
            } catch (error) {
                if (error instanceof Error) {
                    this.popupStore.showMessage(
                        "Error",
                        error.message,
                        "Error",
                    );
                }
            } finally {
                resetForm();
            }
        },
    },
});
</script>
