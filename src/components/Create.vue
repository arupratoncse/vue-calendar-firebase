<template>
    <v-dialog max-width="600px" v-model="dialog" persistent >
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="success mr-4">Create Event</v-btn>
        </template>
        <v-card>
            <v-card-title class="headline primary lighten-1" primary-title>
                Create New Event
            </v-card-title>
            <v-card-text>
                 <v-form class="px-3">
                     <v-text-field label="Name" v-model="name" prepend-icon="mdi-account"></v-text-field>
                     <v-textarea label="Details" v-model="details" prepend-icon="mdi-pencil"></v-textarea>
                     <v-menu
                        :close-on-content-click="true"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px">
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="start"
                            label="Start"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="start"></v-date-picker>
                     </v-menu>
                     <v-menu
                        :close-on-content-click="true"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px">
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="end"
                            label="End"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="end"></v-date-picker>
                     </v-menu>
                     <v-menu
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px">
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="color"
                            label="End"
                            prepend-icon="mdi-palette"
                            readonly
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-color-picker v-model="color"></v-color-picker>
                     </v-menu>
                 </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="addEvent">Create Event</v-btn>
                <v-btn color="red" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import {db} from '@/main'
export default {
    data(){
        return{
            dialog: false,
            name: null,
            details: null,
            start: null,
            end: null,
            color: "#1976D2",
        }
    },
    methods:{
        async addEvent(){
          if(this.name && this.end && this.start){
              this.dialog = false
              await db.collection("calEvent").add({
                  name: this.name,
                  details: this.details,
                  start: this.start,
                  end: this.end,
                  color: this.color
              })
              this.name = null
              this.details = null
              this.start = null
              this.end = null
              this.color = "#1976D2"
              this.$emit('load-event')
          }else{
              alert("Name, start and end are required!")
          }
      },
    }
}
</script>
