import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useRsvpApp = defineStore("rsvp", () => { 

    ////////////
    // STATES//
    ///////////

    const user = reactive({
        name: null,
        email: null
    });

    const is_detail_sceen = ref(false);
    const detail_screen_data = ref(null);
    const events_data = ref(null);
    const is_notification = ref(false);
    const error_message = ref('');

    ////////////
    //FUNCTION//
    ///////////

    function enableDisable_DetailScreen (data) {

        if (is_detail_sceen.value == false) {

            detail_screen_data.value = data
            is_detail_sceen.value = true

        } else {

            is_detail_sceen.value = false

        }

    }

    function enableNotification () {
        is_notification.value = true;

        setTimeout(() => {
            is_notification.value = true;
        }, 1500);
    }




    return {

        user,
        events_data,
        is_detail_sceen,
        detail_screen_data,
        is_notification,
        error_message,

        enableDisable_DetailScreen,
        enableNotification

    }

})