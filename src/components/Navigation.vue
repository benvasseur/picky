<template>
  <v-card
    width="223"
    height="100%"
    outlined
    style="position: sticky; top: 90px;"
  >
    <v-list
      dense
      flat
    >
      <div
        v-for="(item, kItem) in items"
        :key="kItem"
      >
        <v-list-item v-if="!item.children">
          <v-list-item-title class="font-weight-light">
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>

        <v-list-group
          v-else
          v-model="item.open"
          :ripple="false"
          append-icon="$expand"
          color="rgba(0, 0, 0, 0.87)"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-title
              :class="{'font-weight-light': !item.bold }"
            >
              {{ item.label }}
            </v-list-item-title>
          </template>

          <v-list-item
            v-for="(child, cKey) in item.children"
            :key="cKey"
            class="ml-6"
          >
            <v-list-item-title class="font-weight-light">
              {{ child.label }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'Navigation',

  data: () => ({
    items: [
      {
        label: 'Daily Best',
        bold: true,
        open: false,
        icon: 'mdi-seal',
        children: [
          {
            label: 'All',
          },
          {
            label: 'Skin Concern',
          },
          {
            label: 'Product Info',
          },
          {
            label: 'Routine Help',
          },
          {
            label: 'Ingredients',
          },
          {
            label: 'Deals & News',
          },
          {
            label: 'Brand Talk',
          },
          {
            label: 'Opinion',
          },
        ],
      },
      {
        label: 'Featured',
      },
      {
        label: 'Skin Concern',
      },
      {
        label: 'Product Info',
      },
      {
        label: 'Routine Help',
      },
      {
        label: 'Ingredients',
      },
      {
        label: 'Deals & News',
      },
      {
        label: 'Brand Talk',
      },
      {
        label: 'Opinion',
      },
      {
        label: 'Giveaways',
      },
      {
        label: 'Connect',
      },
      {
        label: 'Other',
      },
      {
        label: 'Groups',
        open: false,
        children: [
          {
            label: 'Group 1',
          },
          {
            label: 'Group 2',
          },
          {
            label: 'Group 3',
          },
        ],
      },
    ],
  }),
};
</script>
