const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');

const resolvers = {
    Query: {
        advices(parent, args, ctx, info) {
            return ctx.db.query.advices(args, info)
        },
        adviceTags(parent, args, ctx, info) {
            return ctx.db.query.adviceTags(args, info)
        },
        adviceCategories(parent, args, ctx, info) {
            return ctx.db.query.adviceCategories(args, info)
        },
        contraindications(parent, args, ctx, info) {
            return ctx.db.query.contraindications(args, info)
        },
        exerciseGroups(parent, args, ctx, info) {
            return ctx.db.query.exerciseGroups(args, info)
        },
        exerciseTypes(parent, args, ctx, info) {
            return ctx.db.query.exerciseTypes(args, info)
        },
        equipments(parent, args, ctx, info) {
            return ctx.db.query.equipments(args, info)
        },
    },



    Mutation: {
        createAdvice(parent, {params}, ctx, info) {
            return ctx.db.mutation.createAdvice({data: params}, info);
        },
        createAdviceTag(parent, {params}, ctx, info) {
            return ctx.db.mutation.createAdviceTag({data: {name: params.name}}, info)
        },
        createAdviceCategory(parent, {params}, ctx, info) {
            return ctx.db.mutation.createAdviceCategory({data: {name: params.name}}, info);
        },
        createContraindication(parent, {params}, ctx, info) {
            return ctx.db.mutation.createContraindication({data: {name: params.name}}, info);
        },
        createExerciseGroup(parent, {params}, ctx, info) {
            return ctx.db.mutation.createExerciseGroup({data: {name: params.name}}, info);
        },
        createExerciseType(parent, {params}, ctx, info) {
            return ctx.db.mutation.createExerciseType({data: {name: params.name}}, info);
        },
        createEquipment(parent, {params}, ctx, info) {
            return ctx.db.mutation.createEquipment({data: {name: params.name}}, info);
        },


        deleteAdviceTag(parent, {id}, ctx, info) {
            return ctx.db.mutation.deleteAdviceTag({where: {id}}, info);
        },
        deleteAdviceCategory(parent, {id}, ctx, info) {
            return ctx.db.mutation.deleteAdviceCategory({where: {id}}, info);
        },
        deleteContraindication(parent, {id}, ctx, info) {
            return ctx.db.mutation.deleteContraindication({where: {id}}, info);
        },
        deleteExerciseGroup(parent, {id}, ctx, info) {
            return ctx.db.mutation.deleteExerciseGroup({where: {id}}, info);
        },
        deleteExerciseType(parent, {id}, ctx, info) {
            return ctx.db.mutation.deleteExerciseType({where: {id}}, info);
        },
        deleteEquipment(parent, {id}, ctx, info) {
            return ctx.db.mutation.deleteAdviceCategory({where: {id}}, info);
        },
    },
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: '...',
            secret: '...',
            debug: true,
        }),
    }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
