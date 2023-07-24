export default {

    name: 'daybook',
    component: () => import( /*wepackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import( /*wepackChunkName: "noentry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import( /*wepackChunkName: "entry" */ '@/modules/daybook/views/EntryView.vue'),
            props: ( route ) => {
                const id  = Number( route.params.id )
                return isNaN( id ) ? { id: 1 } : { id }
            }
        }
    ]
}