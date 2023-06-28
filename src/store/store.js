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




    return {

        user,
        is_detail_sceen,
        detail_screen_data,


        enableDisable_DetailScreen

    }

})