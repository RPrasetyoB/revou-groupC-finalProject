
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sleep
 * 
 */
export type Sleep = $Result.DefaultSelection<Prisma.$SleepPayload>
/**
 * Model Steps
 * 
 */
export type Steps = $Result.DefaultSelection<Prisma.$StepsPayload>
/**
 * Model Calories
 * 
 */
export type Calories = $Result.DefaultSelection<Prisma.$CaloriesPayload>
/**
 * Model FoodConsumed
 * 
 */
export type FoodConsumed = $Result.DefaultSelection<Prisma.$FoodConsumedPayload>
/**
 * Model FoodList
 * 
 */
export type FoodList = $Result.DefaultSelection<Prisma.$FoodListPayload>
/**
 * Model Water
 * 
 */
export type Water = $Result.DefaultSelection<Prisma.$WaterPayload>
/**
 * Model Meditation
 * 
 */
export type Meditation = $Result.DefaultSelection<Prisma.$MeditationPayload>
/**
 * Model Mood
 * 
 */
export type Mood = $Result.DefaultSelection<Prisma.$MoodPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  man: 'man',
  woman: 'woman'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Activeness: {
  light: 'light',
  moderate: 'moderate',
  active: 'active'
};

export type Activeness = (typeof Activeness)[keyof typeof Activeness]


export const Todaymood: {
  sad: 'sad',
  netral: 'netral',
  happy: 'happy'
};

export type Todaymood = (typeof Todaymood)[keyof typeof Todaymood]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Activeness = $Enums.Activeness

export const Activeness: typeof $Enums.Activeness

export type Todaymood = $Enums.Todaymood

export const Todaymood: typeof $Enums.Todaymood

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.sleep`: Exposes CRUD operations for the **Sleep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sleeps
    * const sleeps = await prisma.sleep.findMany()
    * ```
    */
  get sleep(): Prisma.SleepDelegate<ExtArgs>;

  /**
   * `prisma.steps`: Exposes CRUD operations for the **Steps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.steps.findMany()
    * ```
    */
  get steps(): Prisma.StepsDelegate<ExtArgs>;

  /**
   * `prisma.calories`: Exposes CRUD operations for the **Calories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calories
    * const calories = await prisma.calories.findMany()
    * ```
    */
  get calories(): Prisma.CaloriesDelegate<ExtArgs>;

  /**
   * `prisma.foodConsumed`: Exposes CRUD operations for the **FoodConsumed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodConsumeds
    * const foodConsumeds = await prisma.foodConsumed.findMany()
    * ```
    */
  get foodConsumed(): Prisma.FoodConsumedDelegate<ExtArgs>;

  /**
   * `prisma.foodList`: Exposes CRUD operations for the **FoodList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodLists
    * const foodLists = await prisma.foodList.findMany()
    * ```
    */
  get foodList(): Prisma.FoodListDelegate<ExtArgs>;

  /**
   * `prisma.water`: Exposes CRUD operations for the **Water** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waters
    * const waters = await prisma.water.findMany()
    * ```
    */
  get water(): Prisma.WaterDelegate<ExtArgs>;

  /**
   * `prisma.meditation`: Exposes CRUD operations for the **Meditation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meditations
    * const meditations = await prisma.meditation.findMany()
    * ```
    */
  get meditation(): Prisma.MeditationDelegate<ExtArgs>;

  /**
   * `prisma.mood`: Exposes CRUD operations for the **Mood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moods
    * const moods = await prisma.mood.findMany()
    * ```
    */
  get mood(): Prisma.MoodDelegate<ExtArgs>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sleep: 'Sleep',
    Steps: 'Steps',
    Calories: 'Calories',
    FoodConsumed: 'FoodConsumed',
    FoodList: 'FoodList',
    Water: 'Water',
    Meditation: 'Meditation',
    Mood: 'Mood',
    Report: 'Report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'sleep' | 'steps' | 'calories' | 'foodConsumed' | 'foodList' | 'water' | 'meditation' | 'mood' | 'report'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sleep: {
        payload: Prisma.$SleepPayload<ExtArgs>
        fields: Prisma.SleepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SleepFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SleepFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload>
          }
          findFirst: {
            args: Prisma.SleepFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SleepFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload>
          }
          findMany: {
            args: Prisma.SleepFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload>[]
          }
          create: {
            args: Prisma.SleepCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload>
          }
          createMany: {
            args: Prisma.SleepCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SleepDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload>
          }
          update: {
            args: Prisma.SleepUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload>
          }
          deleteMany: {
            args: Prisma.SleepDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SleepUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SleepUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SleepPayload>
          }
          aggregate: {
            args: Prisma.SleepAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSleep>
          }
          groupBy: {
            args: Prisma.SleepGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SleepGroupByOutputType>[]
          }
          count: {
            args: Prisma.SleepCountArgs<ExtArgs>,
            result: $Utils.Optional<SleepCountAggregateOutputType> | number
          }
        }
      }
      Steps: {
        payload: Prisma.$StepsPayload<ExtArgs>
        fields: Prisma.StepsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          findFirst: {
            args: Prisma.StepsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          findMany: {
            args: Prisma.StepsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>[]
          }
          create: {
            args: Prisma.StepsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          createMany: {
            args: Prisma.StepsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StepsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          update: {
            args: Prisma.StepsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          deleteMany: {
            args: Prisma.StepsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StepsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StepsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          aggregate: {
            args: Prisma.StepsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSteps>
          }
          groupBy: {
            args: Prisma.StepsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StepsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepsCountArgs<ExtArgs>,
            result: $Utils.Optional<StepsCountAggregateOutputType> | number
          }
        }
      }
      Calories: {
        payload: Prisma.$CaloriesPayload<ExtArgs>
        fields: Prisma.CaloriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaloriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaloriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload>
          }
          findFirst: {
            args: Prisma.CaloriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaloriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload>
          }
          findMany: {
            args: Prisma.CaloriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload>[]
          }
          create: {
            args: Prisma.CaloriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload>
          }
          createMany: {
            args: Prisma.CaloriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CaloriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload>
          }
          update: {
            args: Prisma.CaloriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload>
          }
          deleteMany: {
            args: Prisma.CaloriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CaloriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CaloriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaloriesPayload>
          }
          aggregate: {
            args: Prisma.CaloriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCalories>
          }
          groupBy: {
            args: Prisma.CaloriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CaloriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaloriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CaloriesCountAggregateOutputType> | number
          }
        }
      }
      FoodConsumed: {
        payload: Prisma.$FoodConsumedPayload<ExtArgs>
        fields: Prisma.FoodConsumedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodConsumedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodConsumedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload>
          }
          findFirst: {
            args: Prisma.FoodConsumedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodConsumedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload>
          }
          findMany: {
            args: Prisma.FoodConsumedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload>[]
          }
          create: {
            args: Prisma.FoodConsumedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload>
          }
          createMany: {
            args: Prisma.FoodConsumedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FoodConsumedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload>
          }
          update: {
            args: Prisma.FoodConsumedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload>
          }
          deleteMany: {
            args: Prisma.FoodConsumedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FoodConsumedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FoodConsumedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodConsumedPayload>
          }
          aggregate: {
            args: Prisma.FoodConsumedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFoodConsumed>
          }
          groupBy: {
            args: Prisma.FoodConsumedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FoodConsumedGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodConsumedCountArgs<ExtArgs>,
            result: $Utils.Optional<FoodConsumedCountAggregateOutputType> | number
          }
        }
      }
      FoodList: {
        payload: Prisma.$FoodListPayload<ExtArgs>
        fields: Prisma.FoodListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload>
          }
          findFirst: {
            args: Prisma.FoodListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload>
          }
          findMany: {
            args: Prisma.FoodListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload>[]
          }
          create: {
            args: Prisma.FoodListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload>
          }
          createMany: {
            args: Prisma.FoodListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FoodListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload>
          }
          update: {
            args: Prisma.FoodListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload>
          }
          deleteMany: {
            args: Prisma.FoodListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FoodListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FoodListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodListPayload>
          }
          aggregate: {
            args: Prisma.FoodListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFoodList>
          }
          groupBy: {
            args: Prisma.FoodListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FoodListGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodListCountArgs<ExtArgs>,
            result: $Utils.Optional<FoodListCountAggregateOutputType> | number
          }
        }
      }
      Water: {
        payload: Prisma.$WaterPayload<ExtArgs>
        fields: Prisma.WaterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          findFirst: {
            args: Prisma.WaterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          findMany: {
            args: Prisma.WaterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>[]
          }
          create: {
            args: Prisma.WaterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          createMany: {
            args: Prisma.WaterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WaterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          update: {
            args: Prisma.WaterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          deleteMany: {
            args: Prisma.WaterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WaterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WaterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterPayload>
          }
          aggregate: {
            args: Prisma.WaterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWater>
          }
          groupBy: {
            args: Prisma.WaterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WaterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterCountArgs<ExtArgs>,
            result: $Utils.Optional<WaterCountAggregateOutputType> | number
          }
        }
      }
      Meditation: {
        payload: Prisma.$MeditationPayload<ExtArgs>
        fields: Prisma.MeditationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeditationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeditationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload>
          }
          findFirst: {
            args: Prisma.MeditationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeditationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload>
          }
          findMany: {
            args: Prisma.MeditationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload>[]
          }
          create: {
            args: Prisma.MeditationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload>
          }
          createMany: {
            args: Prisma.MeditationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MeditationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload>
          }
          update: {
            args: Prisma.MeditationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload>
          }
          deleteMany: {
            args: Prisma.MeditationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MeditationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MeditationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MeditationPayload>
          }
          aggregate: {
            args: Prisma.MeditationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMeditation>
          }
          groupBy: {
            args: Prisma.MeditationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MeditationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeditationCountArgs<ExtArgs>,
            result: $Utils.Optional<MeditationCountAggregateOutputType> | number
          }
        }
      }
      Mood: {
        payload: Prisma.$MoodPayload<ExtArgs>
        fields: Prisma.MoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findFirst: {
            args: Prisma.MoodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findMany: {
            args: Prisma.MoodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          create: {
            args: Prisma.MoodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          createMany: {
            args: Prisma.MoodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MoodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          update: {
            args: Prisma.MoodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          deleteMany: {
            args: Prisma.MoodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MoodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MoodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          aggregate: {
            args: Prisma.MoodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMood>
          }
          groupBy: {
            args: Prisma.MoodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodCountArgs<ExtArgs>,
            result: $Utils.Optional<MoodCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>,
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sleep: number
    steps: number
    food: number
    water: number
    meditation: number
    mood: number
    report: number
    foodConsumed: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sleep?: boolean | UserCountOutputTypeCountSleepArgs
    steps?: boolean | UserCountOutputTypeCountStepsArgs
    food?: boolean | UserCountOutputTypeCountFoodArgs
    water?: boolean | UserCountOutputTypeCountWaterArgs
    meditation?: boolean | UserCountOutputTypeCountMeditationArgs
    mood?: boolean | UserCountOutputTypeCountMoodArgs
    report?: boolean | UserCountOutputTypeCountReportArgs
    foodConsumed?: boolean | UserCountOutputTypeCountFoodConsumedArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSleepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SleepWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaloriesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeditationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeditationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoodConsumedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodConsumedWhereInput
  }



  /**
   * Count Type FoodListCountOutputType
   */

  export type FoodListCountOutputType = {
    foodConsumed: number
  }

  export type FoodListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodConsumed?: boolean | FoodListCountOutputTypeCountFoodConsumedArgs
  }

  // Custom InputTypes

  /**
   * FoodListCountOutputType without action
   */
  export type FoodListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListCountOutputType
     */
    select?: FoodListCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FoodListCountOutputType without action
   */
  export type FoodListCountOutputTypeCountFoodConsumedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodConsumedWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    height: number | null
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    weight: number | null
    height: number | null
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    googleId: string | null
    password: string | null
    isEmailVerified: boolean | null
    verificationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nickname: string | null
    weight: number | null
    height: number | null
    gender: $Enums.Gender | null
    age: number | null
    activeness: $Enums.Activeness | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    googleId: string | null
    password: string | null
    isEmailVerified: boolean | null
    verificationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nickname: string | null
    weight: number | null
    height: number | null
    gender: $Enums.Gender | null
    age: number | null
    activeness: $Enums.Activeness | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    googleId: number
    password: number
    isEmailVerified: number
    verificationToken: number
    createdAt: number
    updatedAt: number
    nickname: number
    weight: number
    height: number
    gender: number
    age: number
    activeness: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    weight?: true
    height?: true
    age?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    weight?: true
    height?: true
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    googleId?: true
    password?: true
    isEmailVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
    nickname?: true
    weight?: true
    height?: true
    gender?: true
    age?: true
    activeness?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    googleId?: true
    password?: true
    isEmailVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
    nickname?: true
    weight?: true
    height?: true
    gender?: true
    age?: true
    activeness?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    googleId?: true
    password?: true
    isEmailVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
    nickname?: true
    weight?: true
    height?: true
    gender?: true
    age?: true
    activeness?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    googleId: string | null
    password: string | null
    isEmailVerified: boolean | null
    verificationToken: string | null
    createdAt: Date
    updatedAt: Date
    nickname: string | null
    weight: number | null
    height: number | null
    gender: $Enums.Gender | null
    age: number | null
    activeness: $Enums.Activeness | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    googleId?: boolean
    password?: boolean
    isEmailVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nickname?: boolean
    weight?: boolean
    height?: boolean
    gender?: boolean
    age?: boolean
    activeness?: boolean
    sleep?: boolean | User$sleepArgs<ExtArgs>
    steps?: boolean | User$stepsArgs<ExtArgs>
    food?: boolean | User$foodArgs<ExtArgs>
    water?: boolean | User$waterArgs<ExtArgs>
    meditation?: boolean | User$meditationArgs<ExtArgs>
    mood?: boolean | User$moodArgs<ExtArgs>
    report?: boolean | User$reportArgs<ExtArgs>
    foodConsumed?: boolean | User$foodConsumedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    googleId?: boolean
    password?: boolean
    isEmailVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nickname?: boolean
    weight?: boolean
    height?: boolean
    gender?: boolean
    age?: boolean
    activeness?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sleep?: boolean | User$sleepArgs<ExtArgs>
    steps?: boolean | User$stepsArgs<ExtArgs>
    food?: boolean | User$foodArgs<ExtArgs>
    water?: boolean | User$waterArgs<ExtArgs>
    meditation?: boolean | User$meditationArgs<ExtArgs>
    mood?: boolean | User$moodArgs<ExtArgs>
    report?: boolean | User$reportArgs<ExtArgs>
    foodConsumed?: boolean | User$foodConsumedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sleep: Prisma.$SleepPayload<ExtArgs>[]
      steps: Prisma.$StepsPayload<ExtArgs>[]
      food: Prisma.$CaloriesPayload<ExtArgs>[]
      water: Prisma.$WaterPayload<ExtArgs>[]
      meditation: Prisma.$MeditationPayload<ExtArgs>[]
      mood: Prisma.$MoodPayload<ExtArgs>[]
      report: Prisma.$ReportPayload<ExtArgs>[]
      foodConsumed: Prisma.$FoodConsumedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      googleId: string | null
      password: string | null
      isEmailVerified: boolean | null
      verificationToken: string | null
      createdAt: Date
      updatedAt: Date
      nickname: string | null
      weight: number | null
      height: number | null
      gender: $Enums.Gender | null
      age: number | null
      activeness: $Enums.Activeness | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sleep<T extends User$sleepArgs<ExtArgs> = {}>(args?: Subset<T, User$sleepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'findMany'> | Null>;

    steps<T extends User$stepsArgs<ExtArgs> = {}>(args?: Subset<T, User$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'findMany'> | Null>;

    food<T extends User$foodArgs<ExtArgs> = {}>(args?: Subset<T, User$foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    water<T extends User$waterArgs<ExtArgs> = {}>(args?: Subset<T, User$waterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'findMany'> | Null>;

    meditation<T extends User$meditationArgs<ExtArgs> = {}>(args?: Subset<T, User$meditationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'findMany'> | Null>;

    mood<T extends User$moodArgs<ExtArgs> = {}>(args?: Subset<T, User$moodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'findMany'> | Null>;

    report<T extends User$reportArgs<ExtArgs> = {}>(args?: Subset<T, User$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'findMany'> | Null>;

    foodConsumed<T extends User$foodConsumedArgs<ExtArgs> = {}>(args?: Subset<T, User$foodConsumedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly weight: FieldRef<"User", 'Int'>
    readonly height: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly age: FieldRef<"User", 'Int'>
    readonly activeness: FieldRef<"User", 'Activeness'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.sleep
   */
  export type User$sleepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    where?: SleepWhereInput
    orderBy?: SleepOrderByWithRelationInput | SleepOrderByWithRelationInput[]
    cursor?: SleepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SleepScalarFieldEnum | SleepScalarFieldEnum[]
  }


  /**
   * User.steps
   */
  export type User$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    where?: StepsWhereInput
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    cursor?: StepsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }


  /**
   * User.food
   */
  export type User$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    where?: CaloriesWhereInput
    orderBy?: CaloriesOrderByWithRelationInput | CaloriesOrderByWithRelationInput[]
    cursor?: CaloriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaloriesScalarFieldEnum | CaloriesScalarFieldEnum[]
  }


  /**
   * User.water
   */
  export type User$waterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    where?: WaterWhereInput
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    cursor?: WaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }


  /**
   * User.meditation
   */
  export type User$meditationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    where?: MeditationWhereInput
    orderBy?: MeditationOrderByWithRelationInput | MeditationOrderByWithRelationInput[]
    cursor?: MeditationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeditationScalarFieldEnum | MeditationScalarFieldEnum[]
  }


  /**
   * User.mood
   */
  export type User$moodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    cursor?: MoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }


  /**
   * User.report
   */
  export type User$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }


  /**
   * User.foodConsumed
   */
  export type User$foodConsumedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    where?: FoodConsumedWhereInput
    orderBy?: FoodConsumedOrderByWithRelationInput | FoodConsumedOrderByWithRelationInput[]
    cursor?: FoodConsumedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodConsumedScalarFieldEnum | FoodConsumedScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Sleep
   */

  export type AggregateSleep = {
    _count: SleepCountAggregateOutputType | null
    _avg: SleepAvgAggregateOutputType | null
    _sum: SleepSumAggregateOutputType | null
    _min: SleepMinAggregateOutputType | null
    _max: SleepMaxAggregateOutputType | null
  }

  export type SleepAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sleepActual: number | null
    target: number | null
  }

  export type SleepSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sleepActual: number | null
    target: number | null
  }

  export type SleepMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    sleepStart: Date | null
    sleepEnd: Date | null
    sleepActual: number | null
    target: number | null
  }

  export type SleepMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    sleepStart: Date | null
    sleepEnd: Date | null
    sleepActual: number | null
    target: number | null
  }

  export type SleepCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    sleepStart: number
    sleepEnd: number
    sleepActual: number
    target: number
    _all: number
  }


  export type SleepAvgAggregateInputType = {
    id?: true
    userId?: true
    sleepActual?: true
    target?: true
  }

  export type SleepSumAggregateInputType = {
    id?: true
    userId?: true
    sleepActual?: true
    target?: true
  }

  export type SleepMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    sleepStart?: true
    sleepEnd?: true
    sleepActual?: true
    target?: true
  }

  export type SleepMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    sleepStart?: true
    sleepEnd?: true
    sleepActual?: true
    target?: true
  }

  export type SleepCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    sleepStart?: true
    sleepEnd?: true
    sleepActual?: true
    target?: true
    _all?: true
  }

  export type SleepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sleep to aggregate.
     */
    where?: SleepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sleeps to fetch.
     */
    orderBy?: SleepOrderByWithRelationInput | SleepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SleepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sleeps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sleeps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sleeps
    **/
    _count?: true | SleepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SleepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SleepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SleepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SleepMaxAggregateInputType
  }

  export type GetSleepAggregateType<T extends SleepAggregateArgs> = {
        [P in keyof T & keyof AggregateSleep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSleep[P]>
      : GetScalarType<T[P], AggregateSleep[P]>
  }




  export type SleepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SleepWhereInput
    orderBy?: SleepOrderByWithAggregationInput | SleepOrderByWithAggregationInput[]
    by: SleepScalarFieldEnum[] | SleepScalarFieldEnum
    having?: SleepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SleepCountAggregateInputType | true
    _avg?: SleepAvgAggregateInputType
    _sum?: SleepSumAggregateInputType
    _min?: SleepMinAggregateInputType
    _max?: SleepMaxAggregateInputType
  }

  export type SleepGroupByOutputType = {
    id: number
    userId: number | null
    createdAt: Date
    sleepStart: Date
    sleepEnd: Date
    sleepActual: number
    target: number
    _count: SleepCountAggregateOutputType | null
    _avg: SleepAvgAggregateOutputType | null
    _sum: SleepSumAggregateOutputType | null
    _min: SleepMinAggregateOutputType | null
    _max: SleepMaxAggregateOutputType | null
  }

  type GetSleepGroupByPayload<T extends SleepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SleepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SleepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SleepGroupByOutputType[P]>
            : GetScalarType<T[P], SleepGroupByOutputType[P]>
        }
      >
    >


  export type SleepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    sleepStart?: boolean
    sleepEnd?: boolean
    sleepActual?: boolean
    target?: boolean
    user?: boolean | Sleep$userArgs<ExtArgs>
  }, ExtArgs["result"]["sleep"]>

  export type SleepSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    sleepStart?: boolean
    sleepEnd?: boolean
    sleepActual?: boolean
    target?: boolean
  }

  export type SleepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Sleep$userArgs<ExtArgs>
  }


  export type $SleepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sleep"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      createdAt: Date
      sleepStart: Date
      sleepEnd: Date
      sleepActual: number
      target: number
    }, ExtArgs["result"]["sleep"]>
    composites: {}
  }


  type SleepGetPayload<S extends boolean | null | undefined | SleepDefaultArgs> = $Result.GetResult<Prisma.$SleepPayload, S>

  type SleepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SleepFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SleepCountAggregateInputType | true
    }

  export interface SleepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sleep'], meta: { name: 'Sleep' } }
    /**
     * Find zero or one Sleep that matches the filter.
     * @param {SleepFindUniqueArgs} args - Arguments to find a Sleep
     * @example
     * // Get one Sleep
     * const sleep = await prisma.sleep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SleepFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SleepFindUniqueArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sleep that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SleepFindUniqueOrThrowArgs} args - Arguments to find a Sleep
     * @example
     * // Get one Sleep
     * const sleep = await prisma.sleep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SleepFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SleepFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sleep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepFindFirstArgs} args - Arguments to find a Sleep
     * @example
     * // Get one Sleep
     * const sleep = await prisma.sleep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SleepFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SleepFindFirstArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sleep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepFindFirstOrThrowArgs} args - Arguments to find a Sleep
     * @example
     * // Get one Sleep
     * const sleep = await prisma.sleep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SleepFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SleepFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sleeps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sleeps
     * const sleeps = await prisma.sleep.findMany()
     * 
     * // Get first 10 Sleeps
     * const sleeps = await prisma.sleep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sleepWithIdOnly = await prisma.sleep.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SleepFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SleepFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sleep.
     * @param {SleepCreateArgs} args - Arguments to create a Sleep.
     * @example
     * // Create one Sleep
     * const Sleep = await prisma.sleep.create({
     *   data: {
     *     // ... data to create a Sleep
     *   }
     * })
     * 
    **/
    create<T extends SleepCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SleepCreateArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sleeps.
     *     @param {SleepCreateManyArgs} args - Arguments to create many Sleeps.
     *     @example
     *     // Create many Sleeps
     *     const sleep = await prisma.sleep.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SleepCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SleepCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sleep.
     * @param {SleepDeleteArgs} args - Arguments to delete one Sleep.
     * @example
     * // Delete one Sleep
     * const Sleep = await prisma.sleep.delete({
     *   where: {
     *     // ... filter to delete one Sleep
     *   }
     * })
     * 
    **/
    delete<T extends SleepDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SleepDeleteArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sleep.
     * @param {SleepUpdateArgs} args - Arguments to update one Sleep.
     * @example
     * // Update one Sleep
     * const sleep = await prisma.sleep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SleepUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SleepUpdateArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sleeps.
     * @param {SleepDeleteManyArgs} args - Arguments to filter Sleeps to delete.
     * @example
     * // Delete a few Sleeps
     * const { count } = await prisma.sleep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SleepDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SleepDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sleeps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sleeps
     * const sleep = await prisma.sleep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SleepUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SleepUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sleep.
     * @param {SleepUpsertArgs} args - Arguments to update or create a Sleep.
     * @example
     * // Update or create a Sleep
     * const sleep = await prisma.sleep.upsert({
     *   create: {
     *     // ... data to create a Sleep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sleep we want to update
     *   }
     * })
    **/
    upsert<T extends SleepUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SleepUpsertArgs<ExtArgs>>
    ): Prisma__SleepClient<$Result.GetResult<Prisma.$SleepPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sleeps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepCountArgs} args - Arguments to filter Sleeps to count.
     * @example
     * // Count the number of Sleeps
     * const count = await prisma.sleep.count({
     *   where: {
     *     // ... the filter for the Sleeps we want to count
     *   }
     * })
    **/
    count<T extends SleepCountArgs>(
      args?: Subset<T, SleepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SleepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sleep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SleepAggregateArgs>(args: Subset<T, SleepAggregateArgs>): Prisma.PrismaPromise<GetSleepAggregateType<T>>

    /**
     * Group by Sleep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SleepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SleepGroupByArgs['orderBy'] }
        : { orderBy?: SleepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SleepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSleepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sleep model
   */
  readonly fields: SleepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sleep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SleepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Sleep$userArgs<ExtArgs> = {}>(args?: Subset<T, Sleep$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sleep model
   */ 
  interface SleepFieldRefs {
    readonly id: FieldRef<"Sleep", 'Int'>
    readonly userId: FieldRef<"Sleep", 'Int'>
    readonly createdAt: FieldRef<"Sleep", 'DateTime'>
    readonly sleepStart: FieldRef<"Sleep", 'DateTime'>
    readonly sleepEnd: FieldRef<"Sleep", 'DateTime'>
    readonly sleepActual: FieldRef<"Sleep", 'Int'>
    readonly target: FieldRef<"Sleep", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Sleep findUnique
   */
  export type SleepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * Filter, which Sleep to fetch.
     */
    where: SleepWhereUniqueInput
  }


  /**
   * Sleep findUniqueOrThrow
   */
  export type SleepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * Filter, which Sleep to fetch.
     */
    where: SleepWhereUniqueInput
  }


  /**
   * Sleep findFirst
   */
  export type SleepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * Filter, which Sleep to fetch.
     */
    where?: SleepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sleeps to fetch.
     */
    orderBy?: SleepOrderByWithRelationInput | SleepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sleeps.
     */
    cursor?: SleepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sleeps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sleeps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sleeps.
     */
    distinct?: SleepScalarFieldEnum | SleepScalarFieldEnum[]
  }


  /**
   * Sleep findFirstOrThrow
   */
  export type SleepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * Filter, which Sleep to fetch.
     */
    where?: SleepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sleeps to fetch.
     */
    orderBy?: SleepOrderByWithRelationInput | SleepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sleeps.
     */
    cursor?: SleepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sleeps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sleeps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sleeps.
     */
    distinct?: SleepScalarFieldEnum | SleepScalarFieldEnum[]
  }


  /**
   * Sleep findMany
   */
  export type SleepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * Filter, which Sleeps to fetch.
     */
    where?: SleepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sleeps to fetch.
     */
    orderBy?: SleepOrderByWithRelationInput | SleepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sleeps.
     */
    cursor?: SleepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sleeps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sleeps.
     */
    skip?: number
    distinct?: SleepScalarFieldEnum | SleepScalarFieldEnum[]
  }


  /**
   * Sleep create
   */
  export type SleepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * The data needed to create a Sleep.
     */
    data: XOR<SleepCreateInput, SleepUncheckedCreateInput>
  }


  /**
   * Sleep createMany
   */
  export type SleepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sleeps.
     */
    data: SleepCreateManyInput | SleepCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sleep update
   */
  export type SleepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * The data needed to update a Sleep.
     */
    data: XOR<SleepUpdateInput, SleepUncheckedUpdateInput>
    /**
     * Choose, which Sleep to update.
     */
    where: SleepWhereUniqueInput
  }


  /**
   * Sleep updateMany
   */
  export type SleepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sleeps.
     */
    data: XOR<SleepUpdateManyMutationInput, SleepUncheckedUpdateManyInput>
    /**
     * Filter which Sleeps to update
     */
    where?: SleepWhereInput
  }


  /**
   * Sleep upsert
   */
  export type SleepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * The filter to search for the Sleep to update in case it exists.
     */
    where: SleepWhereUniqueInput
    /**
     * In case the Sleep found by the `where` argument doesn't exist, create a new Sleep with this data.
     */
    create: XOR<SleepCreateInput, SleepUncheckedCreateInput>
    /**
     * In case the Sleep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SleepUpdateInput, SleepUncheckedUpdateInput>
  }


  /**
   * Sleep delete
   */
  export type SleepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
    /**
     * Filter which Sleep to delete.
     */
    where: SleepWhereUniqueInput
  }


  /**
   * Sleep deleteMany
   */
  export type SleepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sleeps to delete
     */
    where?: SleepWhereInput
  }


  /**
   * Sleep.user
   */
  export type Sleep$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Sleep without action
   */
  export type SleepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sleep
     */
    select?: SleepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SleepInclude<ExtArgs> | null
  }



  /**
   * Model Steps
   */

  export type AggregateSteps = {
    _count: StepsCountAggregateOutputType | null
    _avg: StepsAvgAggregateOutputType | null
    _sum: StepsSumAggregateOutputType | null
    _min: StepsMinAggregateOutputType | null
    _max: StepsMaxAggregateOutputType | null
  }

  export type StepsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    stepsActual: number | null
    target: number | null
  }

  export type StepsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    stepsActual: number | null
    target: number | null
  }

  export type StepsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    stepsActual: number | null
    target: number | null
  }

  export type StepsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    stepsActual: number | null
    target: number | null
  }

  export type StepsCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    stepsActual: number
    target: number
    _all: number
  }


  export type StepsAvgAggregateInputType = {
    id?: true
    userId?: true
    stepsActual?: true
    target?: true
  }

  export type StepsSumAggregateInputType = {
    id?: true
    userId?: true
    stepsActual?: true
    target?: true
  }

  export type StepsMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    stepsActual?: true
    target?: true
  }

  export type StepsMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    stepsActual?: true
    target?: true
  }

  export type StepsCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    stepsActual?: true
    target?: true
    _all?: true
  }

  export type StepsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to aggregate.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepsMaxAggregateInputType
  }

  export type GetStepsAggregateType<T extends StepsAggregateArgs> = {
        [P in keyof T & keyof AggregateSteps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSteps[P]>
      : GetScalarType<T[P], AggregateSteps[P]>
  }




  export type StepsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepsWhereInput
    orderBy?: StepsOrderByWithAggregationInput | StepsOrderByWithAggregationInput[]
    by: StepsScalarFieldEnum[] | StepsScalarFieldEnum
    having?: StepsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepsCountAggregateInputType | true
    _avg?: StepsAvgAggregateInputType
    _sum?: StepsSumAggregateInputType
    _min?: StepsMinAggregateInputType
    _max?: StepsMaxAggregateInputType
  }

  export type StepsGroupByOutputType = {
    id: number
    userId: number | null
    createdAt: Date
    stepsActual: number
    target: number
    _count: StepsCountAggregateOutputType | null
    _avg: StepsAvgAggregateOutputType | null
    _sum: StepsSumAggregateOutputType | null
    _min: StepsMinAggregateOutputType | null
    _max: StepsMaxAggregateOutputType | null
  }

  type GetStepsGroupByPayload<T extends StepsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepsGroupByOutputType[P]>
            : GetScalarType<T[P], StepsGroupByOutputType[P]>
        }
      >
    >


  export type StepsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    stepsActual?: boolean
    target?: boolean
    user?: boolean | Steps$userArgs<ExtArgs>
  }, ExtArgs["result"]["steps"]>

  export type StepsSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    stepsActual?: boolean
    target?: boolean
  }

  export type StepsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Steps$userArgs<ExtArgs>
  }


  export type $StepsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Steps"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      createdAt: Date
      stepsActual: number
      target: number
    }, ExtArgs["result"]["steps"]>
    composites: {}
  }


  type StepsGetPayload<S extends boolean | null | undefined | StepsDefaultArgs> = $Result.GetResult<Prisma.$StepsPayload, S>

  type StepsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StepsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StepsCountAggregateInputType | true
    }

  export interface StepsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Steps'], meta: { name: 'Steps' } }
    /**
     * Find zero or one Steps that matches the filter.
     * @param {StepsFindUniqueArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StepsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StepsFindUniqueArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Steps that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StepsFindUniqueOrThrowArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StepsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StepsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsFindFirstArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StepsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StepsFindFirstArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Steps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsFindFirstOrThrowArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StepsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StepsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.steps.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.steps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepsWithIdOnly = await prisma.steps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StepsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Steps.
     * @param {StepsCreateArgs} args - Arguments to create a Steps.
     * @example
     * // Create one Steps
     * const Steps = await prisma.steps.create({
     *   data: {
     *     // ... data to create a Steps
     *   }
     * })
     * 
    **/
    create<T extends StepsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StepsCreateArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Steps.
     *     @param {StepsCreateManyArgs} args - Arguments to create many Steps.
     *     @example
     *     // Create many Steps
     *     const steps = await prisma.steps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StepsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Steps.
     * @param {StepsDeleteArgs} args - Arguments to delete one Steps.
     * @example
     * // Delete one Steps
     * const Steps = await prisma.steps.delete({
     *   where: {
     *     // ... filter to delete one Steps
     *   }
     * })
     * 
    **/
    delete<T extends StepsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StepsDeleteArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Steps.
     * @param {StepsUpdateArgs} args - Arguments to update one Steps.
     * @example
     * // Update one Steps
     * const steps = await prisma.steps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StepsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StepsUpdateArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Steps.
     * @param {StepsDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.steps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StepsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const steps = await prisma.steps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StepsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StepsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Steps.
     * @param {StepsUpsertArgs} args - Arguments to update or create a Steps.
     * @example
     * // Update or create a Steps
     * const steps = await prisma.steps.upsert({
     *   create: {
     *     // ... data to create a Steps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Steps we want to update
     *   }
     * })
    **/
    upsert<T extends StepsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StepsUpsertArgs<ExtArgs>>
    ): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.steps.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepsCountArgs>(
      args?: Subset<T, StepsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepsAggregateArgs>(args: Subset<T, StepsAggregateArgs>): Prisma.PrismaPromise<GetStepsAggregateType<T>>

    /**
     * Group by Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepsGroupByArgs['orderBy'] }
        : { orderBy?: StepsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Steps model
   */
  readonly fields: StepsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Steps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Steps$userArgs<ExtArgs> = {}>(args?: Subset<T, Steps$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Steps model
   */ 
  interface StepsFieldRefs {
    readonly id: FieldRef<"Steps", 'Int'>
    readonly userId: FieldRef<"Steps", 'Int'>
    readonly createdAt: FieldRef<"Steps", 'DateTime'>
    readonly stepsActual: FieldRef<"Steps", 'Int'>
    readonly target: FieldRef<"Steps", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Steps findUnique
   */
  export type StepsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where: StepsWhereUniqueInput
  }


  /**
   * Steps findUniqueOrThrow
   */
  export type StepsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where: StepsWhereUniqueInput
  }


  /**
   * Steps findFirst
   */
  export type StepsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }


  /**
   * Steps findFirstOrThrow
   */
  export type StepsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }


  /**
   * Steps findMany
   */
  export type StepsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }


  /**
   * Steps create
   */
  export type StepsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * The data needed to create a Steps.
     */
    data: XOR<StepsCreateInput, StepsUncheckedCreateInput>
  }


  /**
   * Steps createMany
   */
  export type StepsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepsCreateManyInput | StepsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Steps update
   */
  export type StepsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * The data needed to update a Steps.
     */
    data: XOR<StepsUpdateInput, StepsUncheckedUpdateInput>
    /**
     * Choose, which Steps to update.
     */
    where: StepsWhereUniqueInput
  }


  /**
   * Steps updateMany
   */
  export type StepsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepsUpdateManyMutationInput, StepsUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepsWhereInput
  }


  /**
   * Steps upsert
   */
  export type StepsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * The filter to search for the Steps to update in case it exists.
     */
    where: StepsWhereUniqueInput
    /**
     * In case the Steps found by the `where` argument doesn't exist, create a new Steps with this data.
     */
    create: XOR<StepsCreateInput, StepsUncheckedCreateInput>
    /**
     * In case the Steps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepsUpdateInput, StepsUncheckedUpdateInput>
  }


  /**
   * Steps delete
   */
  export type StepsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter which Steps to delete.
     */
    where: StepsWhereUniqueInput
  }


  /**
   * Steps deleteMany
   */
  export type StepsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepsWhereInput
  }


  /**
   * Steps.user
   */
  export type Steps$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Steps without action
   */
  export type StepsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StepsInclude<ExtArgs> | null
  }



  /**
   * Model Calories
   */

  export type AggregateCalories = {
    _count: CaloriesCountAggregateOutputType | null
    _avg: CaloriesAvgAggregateOutputType | null
    _sum: CaloriesSumAggregateOutputType | null
    _min: CaloriesMinAggregateOutputType | null
    _max: CaloriesMaxAggregateOutputType | null
  }

  export type CaloriesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amr: number | null
    bmi: number | null
    actual: number | null
    target: number | null
  }

  export type CaloriesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amr: number | null
    bmi: number | null
    actual: number | null
    target: number | null
  }

  export type CaloriesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    amr: number | null
    bmi: number | null
    actual: number | null
    target: number | null
  }

  export type CaloriesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    amr: number | null
    bmi: number | null
    actual: number | null
    target: number | null
  }

  export type CaloriesCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    amr: number
    bmi: number
    actual: number
    target: number
    _all: number
  }


  export type CaloriesAvgAggregateInputType = {
    id?: true
    userId?: true
    amr?: true
    bmi?: true
    actual?: true
    target?: true
  }

  export type CaloriesSumAggregateInputType = {
    id?: true
    userId?: true
    amr?: true
    bmi?: true
    actual?: true
    target?: true
  }

  export type CaloriesMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    amr?: true
    bmi?: true
    actual?: true
    target?: true
  }

  export type CaloriesMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    amr?: true
    bmi?: true
    actual?: true
    target?: true
  }

  export type CaloriesCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    amr?: true
    bmi?: true
    actual?: true
    target?: true
    _all?: true
  }

  export type CaloriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calories to aggregate.
     */
    where?: CaloriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calories to fetch.
     */
    orderBy?: CaloriesOrderByWithRelationInput | CaloriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaloriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calories
    **/
    _count?: true | CaloriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaloriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaloriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaloriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaloriesMaxAggregateInputType
  }

  export type GetCaloriesAggregateType<T extends CaloriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCalories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalories[P]>
      : GetScalarType<T[P], AggregateCalories[P]>
  }




  export type CaloriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaloriesWhereInput
    orderBy?: CaloriesOrderByWithAggregationInput | CaloriesOrderByWithAggregationInput[]
    by: CaloriesScalarFieldEnum[] | CaloriesScalarFieldEnum
    having?: CaloriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaloriesCountAggregateInputType | true
    _avg?: CaloriesAvgAggregateInputType
    _sum?: CaloriesSumAggregateInputType
    _min?: CaloriesMinAggregateInputType
    _max?: CaloriesMaxAggregateInputType
  }

  export type CaloriesGroupByOutputType = {
    id: number
    userId: number | null
    createdAt: Date
    amr: number
    bmi: number
    actual: number | null
    target: number
    _count: CaloriesCountAggregateOutputType | null
    _avg: CaloriesAvgAggregateOutputType | null
    _sum: CaloriesSumAggregateOutputType | null
    _min: CaloriesMinAggregateOutputType | null
    _max: CaloriesMaxAggregateOutputType | null
  }

  type GetCaloriesGroupByPayload<T extends CaloriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaloriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaloriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaloriesGroupByOutputType[P]>
            : GetScalarType<T[P], CaloriesGroupByOutputType[P]>
        }
      >
    >


  export type CaloriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    amr?: boolean
    bmi?: boolean
    actual?: boolean
    target?: boolean
    user?: boolean | Calories$userArgs<ExtArgs>
  }, ExtArgs["result"]["calories"]>

  export type CaloriesSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    amr?: boolean
    bmi?: boolean
    actual?: boolean
    target?: boolean
  }

  export type CaloriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Calories$userArgs<ExtArgs>
  }


  export type $CaloriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calories"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      createdAt: Date
      amr: number
      bmi: number
      actual: number | null
      target: number
    }, ExtArgs["result"]["calories"]>
    composites: {}
  }


  type CaloriesGetPayload<S extends boolean | null | undefined | CaloriesDefaultArgs> = $Result.GetResult<Prisma.$CaloriesPayload, S>

  type CaloriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CaloriesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CaloriesCountAggregateInputType | true
    }

  export interface CaloriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calories'], meta: { name: 'Calories' } }
    /**
     * Find zero or one Calories that matches the filter.
     * @param {CaloriesFindUniqueArgs} args - Arguments to find a Calories
     * @example
     * // Get one Calories
     * const calories = await prisma.calories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CaloriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CaloriesFindUniqueArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Calories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CaloriesFindUniqueOrThrowArgs} args - Arguments to find a Calories
     * @example
     * // Get one Calories
     * const calories = await prisma.calories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CaloriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CaloriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Calories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesFindFirstArgs} args - Arguments to find a Calories
     * @example
     * // Get one Calories
     * const calories = await prisma.calories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CaloriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CaloriesFindFirstArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Calories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesFindFirstOrThrowArgs} args - Arguments to find a Calories
     * @example
     * // Get one Calories
     * const calories = await prisma.calories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CaloriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CaloriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Calories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calories
     * const calories = await prisma.calories.findMany()
     * 
     * // Get first 10 Calories
     * const calories = await prisma.calories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caloriesWithIdOnly = await prisma.calories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CaloriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CaloriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Calories.
     * @param {CaloriesCreateArgs} args - Arguments to create a Calories.
     * @example
     * // Create one Calories
     * const Calories = await prisma.calories.create({
     *   data: {
     *     // ... data to create a Calories
     *   }
     * })
     * 
    **/
    create<T extends CaloriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CaloriesCreateArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Calories.
     *     @param {CaloriesCreateManyArgs} args - Arguments to create many Calories.
     *     @example
     *     // Create many Calories
     *     const calories = await prisma.calories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CaloriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CaloriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calories.
     * @param {CaloriesDeleteArgs} args - Arguments to delete one Calories.
     * @example
     * // Delete one Calories
     * const Calories = await prisma.calories.delete({
     *   where: {
     *     // ... filter to delete one Calories
     *   }
     * })
     * 
    **/
    delete<T extends CaloriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CaloriesDeleteArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Calories.
     * @param {CaloriesUpdateArgs} args - Arguments to update one Calories.
     * @example
     * // Update one Calories
     * const calories = await prisma.calories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CaloriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CaloriesUpdateArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Calories.
     * @param {CaloriesDeleteManyArgs} args - Arguments to filter Calories to delete.
     * @example
     * // Delete a few Calories
     * const { count } = await prisma.calories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CaloriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CaloriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calories
     * const calories = await prisma.calories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CaloriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CaloriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calories.
     * @param {CaloriesUpsertArgs} args - Arguments to update or create a Calories.
     * @example
     * // Update or create a Calories
     * const calories = await prisma.calories.upsert({
     *   create: {
     *     // ... data to create a Calories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calories we want to update
     *   }
     * })
    **/
    upsert<T extends CaloriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CaloriesUpsertArgs<ExtArgs>>
    ): Prisma__CaloriesClient<$Result.GetResult<Prisma.$CaloriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Calories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesCountArgs} args - Arguments to filter Calories to count.
     * @example
     * // Count the number of Calories
     * const count = await prisma.calories.count({
     *   where: {
     *     // ... the filter for the Calories we want to count
     *   }
     * })
    **/
    count<T extends CaloriesCountArgs>(
      args?: Subset<T, CaloriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaloriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaloriesAggregateArgs>(args: Subset<T, CaloriesAggregateArgs>): Prisma.PrismaPromise<GetCaloriesAggregateType<T>>

    /**
     * Group by Calories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaloriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaloriesGroupByArgs['orderBy'] }
        : { orderBy?: CaloriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaloriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaloriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calories model
   */
  readonly fields: CaloriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaloriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Calories$userArgs<ExtArgs> = {}>(args?: Subset<T, Calories$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Calories model
   */ 
  interface CaloriesFieldRefs {
    readonly id: FieldRef<"Calories", 'Int'>
    readonly userId: FieldRef<"Calories", 'Int'>
    readonly createdAt: FieldRef<"Calories", 'DateTime'>
    readonly amr: FieldRef<"Calories", 'Int'>
    readonly bmi: FieldRef<"Calories", 'Int'>
    readonly actual: FieldRef<"Calories", 'Int'>
    readonly target: FieldRef<"Calories", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Calories findUnique
   */
  export type CaloriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * Filter, which Calories to fetch.
     */
    where: CaloriesWhereUniqueInput
  }


  /**
   * Calories findUniqueOrThrow
   */
  export type CaloriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * Filter, which Calories to fetch.
     */
    where: CaloriesWhereUniqueInput
  }


  /**
   * Calories findFirst
   */
  export type CaloriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * Filter, which Calories to fetch.
     */
    where?: CaloriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calories to fetch.
     */
    orderBy?: CaloriesOrderByWithRelationInput | CaloriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calories.
     */
    cursor?: CaloriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calories.
     */
    distinct?: CaloriesScalarFieldEnum | CaloriesScalarFieldEnum[]
  }


  /**
   * Calories findFirstOrThrow
   */
  export type CaloriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * Filter, which Calories to fetch.
     */
    where?: CaloriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calories to fetch.
     */
    orderBy?: CaloriesOrderByWithRelationInput | CaloriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calories.
     */
    cursor?: CaloriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calories.
     */
    distinct?: CaloriesScalarFieldEnum | CaloriesScalarFieldEnum[]
  }


  /**
   * Calories findMany
   */
  export type CaloriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * Filter, which Calories to fetch.
     */
    where?: CaloriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calories to fetch.
     */
    orderBy?: CaloriesOrderByWithRelationInput | CaloriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calories.
     */
    cursor?: CaloriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calories.
     */
    skip?: number
    distinct?: CaloriesScalarFieldEnum | CaloriesScalarFieldEnum[]
  }


  /**
   * Calories create
   */
  export type CaloriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Calories.
     */
    data: XOR<CaloriesCreateInput, CaloriesUncheckedCreateInput>
  }


  /**
   * Calories createMany
   */
  export type CaloriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calories.
     */
    data: CaloriesCreateManyInput | CaloriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Calories update
   */
  export type CaloriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Calories.
     */
    data: XOR<CaloriesUpdateInput, CaloriesUncheckedUpdateInput>
    /**
     * Choose, which Calories to update.
     */
    where: CaloriesWhereUniqueInput
  }


  /**
   * Calories updateMany
   */
  export type CaloriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calories.
     */
    data: XOR<CaloriesUpdateManyMutationInput, CaloriesUncheckedUpdateManyInput>
    /**
     * Filter which Calories to update
     */
    where?: CaloriesWhereInput
  }


  /**
   * Calories upsert
   */
  export type CaloriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Calories to update in case it exists.
     */
    where: CaloriesWhereUniqueInput
    /**
     * In case the Calories found by the `where` argument doesn't exist, create a new Calories with this data.
     */
    create: XOR<CaloriesCreateInput, CaloriesUncheckedCreateInput>
    /**
     * In case the Calories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaloriesUpdateInput, CaloriesUncheckedUpdateInput>
  }


  /**
   * Calories delete
   */
  export type CaloriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
    /**
     * Filter which Calories to delete.
     */
    where: CaloriesWhereUniqueInput
  }


  /**
   * Calories deleteMany
   */
  export type CaloriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calories to delete
     */
    where?: CaloriesWhereInput
  }


  /**
   * Calories.user
   */
  export type Calories$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Calories without action
   */
  export type CaloriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calories
     */
    select?: CaloriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaloriesInclude<ExtArgs> | null
  }



  /**
   * Model FoodConsumed
   */

  export type AggregateFoodConsumed = {
    _count: FoodConsumedCountAggregateOutputType | null
    _avg: FoodConsumedAvgAggregateOutputType | null
    _sum: FoodConsumedSumAggregateOutputType | null
    _min: FoodConsumedMinAggregateOutputType | null
    _max: FoodConsumedMaxAggregateOutputType | null
  }

  export type FoodConsumedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    calories: number | null
  }

  export type FoodConsumedSumAggregateOutputType = {
    id: number | null
    userId: number | null
    calories: number | null
  }

  export type FoodConsumedMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    foodName: string | null
    calories: number | null
    uniqueId: string | null
  }

  export type FoodConsumedMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    foodName: string | null
    calories: number | null
    uniqueId: string | null
  }

  export type FoodConsumedCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    foodName: number
    calories: number
    uniqueId: number
    _all: number
  }


  export type FoodConsumedAvgAggregateInputType = {
    id?: true
    userId?: true
    calories?: true
  }

  export type FoodConsumedSumAggregateInputType = {
    id?: true
    userId?: true
    calories?: true
  }

  export type FoodConsumedMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    foodName?: true
    calories?: true
    uniqueId?: true
  }

  export type FoodConsumedMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    foodName?: true
    calories?: true
    uniqueId?: true
  }

  export type FoodConsumedCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    foodName?: true
    calories?: true
    uniqueId?: true
    _all?: true
  }

  export type FoodConsumedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodConsumed to aggregate.
     */
    where?: FoodConsumedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodConsumeds to fetch.
     */
    orderBy?: FoodConsumedOrderByWithRelationInput | FoodConsumedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodConsumedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodConsumeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodConsumeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodConsumeds
    **/
    _count?: true | FoodConsumedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodConsumedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodConsumedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodConsumedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodConsumedMaxAggregateInputType
  }

  export type GetFoodConsumedAggregateType<T extends FoodConsumedAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodConsumed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodConsumed[P]>
      : GetScalarType<T[P], AggregateFoodConsumed[P]>
  }




  export type FoodConsumedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodConsumedWhereInput
    orderBy?: FoodConsumedOrderByWithAggregationInput | FoodConsumedOrderByWithAggregationInput[]
    by: FoodConsumedScalarFieldEnum[] | FoodConsumedScalarFieldEnum
    having?: FoodConsumedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodConsumedCountAggregateInputType | true
    _avg?: FoodConsumedAvgAggregateInputType
    _sum?: FoodConsumedSumAggregateInputType
    _min?: FoodConsumedMinAggregateInputType
    _max?: FoodConsumedMaxAggregateInputType
  }

  export type FoodConsumedGroupByOutputType = {
    id: number
    userId: number | null
    createdAt: Date
    updatedAt: Date
    foodName: string
    calories: number
    uniqueId: string
    _count: FoodConsumedCountAggregateOutputType | null
    _avg: FoodConsumedAvgAggregateOutputType | null
    _sum: FoodConsumedSumAggregateOutputType | null
    _min: FoodConsumedMinAggregateOutputType | null
    _max: FoodConsumedMaxAggregateOutputType | null
  }

  type GetFoodConsumedGroupByPayload<T extends FoodConsumedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodConsumedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodConsumedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodConsumedGroupByOutputType[P]>
            : GetScalarType<T[P], FoodConsumedGroupByOutputType[P]>
        }
      >
    >


  export type FoodConsumedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foodName?: boolean
    calories?: boolean
    uniqueId?: boolean
    user?: boolean | FoodConsumed$userArgs<ExtArgs>
    food?: boolean | FoodListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodConsumed"]>

  export type FoodConsumedSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foodName?: boolean
    calories?: boolean
    uniqueId?: boolean
  }

  export type FoodConsumedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FoodConsumed$userArgs<ExtArgs>
    food?: boolean | FoodListDefaultArgs<ExtArgs>
  }


  export type $FoodConsumedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodConsumed"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      food: Prisma.$FoodListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      createdAt: Date
      updatedAt: Date
      foodName: string
      calories: number
      uniqueId: string
    }, ExtArgs["result"]["foodConsumed"]>
    composites: {}
  }


  type FoodConsumedGetPayload<S extends boolean | null | undefined | FoodConsumedDefaultArgs> = $Result.GetResult<Prisma.$FoodConsumedPayload, S>

  type FoodConsumedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodConsumedFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FoodConsumedCountAggregateInputType | true
    }

  export interface FoodConsumedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodConsumed'], meta: { name: 'FoodConsumed' } }
    /**
     * Find zero or one FoodConsumed that matches the filter.
     * @param {FoodConsumedFindUniqueArgs} args - Arguments to find a FoodConsumed
     * @example
     * // Get one FoodConsumed
     * const foodConsumed = await prisma.foodConsumed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FoodConsumedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FoodConsumedFindUniqueArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FoodConsumed that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FoodConsumedFindUniqueOrThrowArgs} args - Arguments to find a FoodConsumed
     * @example
     * // Get one FoodConsumed
     * const foodConsumed = await prisma.foodConsumed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FoodConsumedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodConsumedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FoodConsumed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodConsumedFindFirstArgs} args - Arguments to find a FoodConsumed
     * @example
     * // Get one FoodConsumed
     * const foodConsumed = await prisma.foodConsumed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FoodConsumedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodConsumedFindFirstArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FoodConsumed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodConsumedFindFirstOrThrowArgs} args - Arguments to find a FoodConsumed
     * @example
     * // Get one FoodConsumed
     * const foodConsumed = await prisma.foodConsumed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FoodConsumedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodConsumedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FoodConsumeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodConsumedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodConsumeds
     * const foodConsumeds = await prisma.foodConsumed.findMany()
     * 
     * // Get first 10 FoodConsumeds
     * const foodConsumeds = await prisma.foodConsumed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodConsumedWithIdOnly = await prisma.foodConsumed.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FoodConsumedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodConsumedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FoodConsumed.
     * @param {FoodConsumedCreateArgs} args - Arguments to create a FoodConsumed.
     * @example
     * // Create one FoodConsumed
     * const FoodConsumed = await prisma.foodConsumed.create({
     *   data: {
     *     // ... data to create a FoodConsumed
     *   }
     * })
     * 
    **/
    create<T extends FoodConsumedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodConsumedCreateArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FoodConsumeds.
     *     @param {FoodConsumedCreateManyArgs} args - Arguments to create many FoodConsumeds.
     *     @example
     *     // Create many FoodConsumeds
     *     const foodConsumed = await prisma.foodConsumed.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FoodConsumedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodConsumedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodConsumed.
     * @param {FoodConsumedDeleteArgs} args - Arguments to delete one FoodConsumed.
     * @example
     * // Delete one FoodConsumed
     * const FoodConsumed = await prisma.foodConsumed.delete({
     *   where: {
     *     // ... filter to delete one FoodConsumed
     *   }
     * })
     * 
    **/
    delete<T extends FoodConsumedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FoodConsumedDeleteArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FoodConsumed.
     * @param {FoodConsumedUpdateArgs} args - Arguments to update one FoodConsumed.
     * @example
     * // Update one FoodConsumed
     * const foodConsumed = await prisma.foodConsumed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FoodConsumedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodConsumedUpdateArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FoodConsumeds.
     * @param {FoodConsumedDeleteManyArgs} args - Arguments to filter FoodConsumeds to delete.
     * @example
     * // Delete a few FoodConsumeds
     * const { count } = await prisma.foodConsumed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FoodConsumedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodConsumedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodConsumeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodConsumedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodConsumeds
     * const foodConsumed = await prisma.foodConsumed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FoodConsumedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FoodConsumedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodConsumed.
     * @param {FoodConsumedUpsertArgs} args - Arguments to update or create a FoodConsumed.
     * @example
     * // Update or create a FoodConsumed
     * const foodConsumed = await prisma.foodConsumed.upsert({
     *   create: {
     *     // ... data to create a FoodConsumed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodConsumed we want to update
     *   }
     * })
    **/
    upsert<T extends FoodConsumedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FoodConsumedUpsertArgs<ExtArgs>>
    ): Prisma__FoodConsumedClient<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FoodConsumeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodConsumedCountArgs} args - Arguments to filter FoodConsumeds to count.
     * @example
     * // Count the number of FoodConsumeds
     * const count = await prisma.foodConsumed.count({
     *   where: {
     *     // ... the filter for the FoodConsumeds we want to count
     *   }
     * })
    **/
    count<T extends FoodConsumedCountArgs>(
      args?: Subset<T, FoodConsumedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodConsumedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodConsumed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodConsumedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodConsumedAggregateArgs>(args: Subset<T, FoodConsumedAggregateArgs>): Prisma.PrismaPromise<GetFoodConsumedAggregateType<T>>

    /**
     * Group by FoodConsumed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodConsumedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodConsumedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodConsumedGroupByArgs['orderBy'] }
        : { orderBy?: FoodConsumedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodConsumedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodConsumedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodConsumed model
   */
  readonly fields: FoodConsumedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodConsumed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodConsumedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends FoodConsumed$userArgs<ExtArgs> = {}>(args?: Subset<T, FoodConsumed$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    food<T extends FoodListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodListDefaultArgs<ExtArgs>>): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FoodConsumed model
   */ 
  interface FoodConsumedFieldRefs {
    readonly id: FieldRef<"FoodConsumed", 'Int'>
    readonly userId: FieldRef<"FoodConsumed", 'Int'>
    readonly createdAt: FieldRef<"FoodConsumed", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodConsumed", 'DateTime'>
    readonly foodName: FieldRef<"FoodConsumed", 'String'>
    readonly calories: FieldRef<"FoodConsumed", 'Int'>
    readonly uniqueId: FieldRef<"FoodConsumed", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FoodConsumed findUnique
   */
  export type FoodConsumedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * Filter, which FoodConsumed to fetch.
     */
    where: FoodConsumedWhereUniqueInput
  }


  /**
   * FoodConsumed findUniqueOrThrow
   */
  export type FoodConsumedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * Filter, which FoodConsumed to fetch.
     */
    where: FoodConsumedWhereUniqueInput
  }


  /**
   * FoodConsumed findFirst
   */
  export type FoodConsumedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * Filter, which FoodConsumed to fetch.
     */
    where?: FoodConsumedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodConsumeds to fetch.
     */
    orderBy?: FoodConsumedOrderByWithRelationInput | FoodConsumedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodConsumeds.
     */
    cursor?: FoodConsumedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodConsumeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodConsumeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodConsumeds.
     */
    distinct?: FoodConsumedScalarFieldEnum | FoodConsumedScalarFieldEnum[]
  }


  /**
   * FoodConsumed findFirstOrThrow
   */
  export type FoodConsumedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * Filter, which FoodConsumed to fetch.
     */
    where?: FoodConsumedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodConsumeds to fetch.
     */
    orderBy?: FoodConsumedOrderByWithRelationInput | FoodConsumedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodConsumeds.
     */
    cursor?: FoodConsumedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodConsumeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodConsumeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodConsumeds.
     */
    distinct?: FoodConsumedScalarFieldEnum | FoodConsumedScalarFieldEnum[]
  }


  /**
   * FoodConsumed findMany
   */
  export type FoodConsumedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * Filter, which FoodConsumeds to fetch.
     */
    where?: FoodConsumedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodConsumeds to fetch.
     */
    orderBy?: FoodConsumedOrderByWithRelationInput | FoodConsumedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodConsumeds.
     */
    cursor?: FoodConsumedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodConsumeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodConsumeds.
     */
    skip?: number
    distinct?: FoodConsumedScalarFieldEnum | FoodConsumedScalarFieldEnum[]
  }


  /**
   * FoodConsumed create
   */
  export type FoodConsumedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodConsumed.
     */
    data: XOR<FoodConsumedCreateInput, FoodConsumedUncheckedCreateInput>
  }


  /**
   * FoodConsumed createMany
   */
  export type FoodConsumedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodConsumeds.
     */
    data: FoodConsumedCreateManyInput | FoodConsumedCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FoodConsumed update
   */
  export type FoodConsumedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodConsumed.
     */
    data: XOR<FoodConsumedUpdateInput, FoodConsumedUncheckedUpdateInput>
    /**
     * Choose, which FoodConsumed to update.
     */
    where: FoodConsumedWhereUniqueInput
  }


  /**
   * FoodConsumed updateMany
   */
  export type FoodConsumedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodConsumeds.
     */
    data: XOR<FoodConsumedUpdateManyMutationInput, FoodConsumedUncheckedUpdateManyInput>
    /**
     * Filter which FoodConsumeds to update
     */
    where?: FoodConsumedWhereInput
  }


  /**
   * FoodConsumed upsert
   */
  export type FoodConsumedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodConsumed to update in case it exists.
     */
    where: FoodConsumedWhereUniqueInput
    /**
     * In case the FoodConsumed found by the `where` argument doesn't exist, create a new FoodConsumed with this data.
     */
    create: XOR<FoodConsumedCreateInput, FoodConsumedUncheckedCreateInput>
    /**
     * In case the FoodConsumed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodConsumedUpdateInput, FoodConsumedUncheckedUpdateInput>
  }


  /**
   * FoodConsumed delete
   */
  export type FoodConsumedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    /**
     * Filter which FoodConsumed to delete.
     */
    where: FoodConsumedWhereUniqueInput
  }


  /**
   * FoodConsumed deleteMany
   */
  export type FoodConsumedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodConsumeds to delete
     */
    where?: FoodConsumedWhereInput
  }


  /**
   * FoodConsumed.user
   */
  export type FoodConsumed$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * FoodConsumed without action
   */
  export type FoodConsumedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
  }



  /**
   * Model FoodList
   */

  export type AggregateFoodList = {
    _count: FoodListCountAggregateOutputType | null
    _avg: FoodListAvgAggregateOutputType | null
    _sum: FoodListSumAggregateOutputType | null
    _min: FoodListMinAggregateOutputType | null
    _max: FoodListMaxAggregateOutputType | null
  }

  export type FoodListAvgAggregateOutputType = {
    id: number | null
    calories: number | null
  }

  export type FoodListSumAggregateOutputType = {
    id: number | null
    calories: number | null
  }

  export type FoodListMinAggregateOutputType = {
    id: number | null
    foodName: string | null
    calories: number | null
  }

  export type FoodListMaxAggregateOutputType = {
    id: number | null
    foodName: string | null
    calories: number | null
  }

  export type FoodListCountAggregateOutputType = {
    id: number
    foodName: number
    calories: number
    _all: number
  }


  export type FoodListAvgAggregateInputType = {
    id?: true
    calories?: true
  }

  export type FoodListSumAggregateInputType = {
    id?: true
    calories?: true
  }

  export type FoodListMinAggregateInputType = {
    id?: true
    foodName?: true
    calories?: true
  }

  export type FoodListMaxAggregateInputType = {
    id?: true
    foodName?: true
    calories?: true
  }

  export type FoodListCountAggregateInputType = {
    id?: true
    foodName?: true
    calories?: true
    _all?: true
  }

  export type FoodListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodList to aggregate.
     */
    where?: FoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLists to fetch.
     */
    orderBy?: FoodListOrderByWithRelationInput | FoodListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodLists
    **/
    _count?: true | FoodListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodListMaxAggregateInputType
  }

  export type GetFoodListAggregateType<T extends FoodListAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodList[P]>
      : GetScalarType<T[P], AggregateFoodList[P]>
  }




  export type FoodListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodListWhereInput
    orderBy?: FoodListOrderByWithAggregationInput | FoodListOrderByWithAggregationInput[]
    by: FoodListScalarFieldEnum[] | FoodListScalarFieldEnum
    having?: FoodListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodListCountAggregateInputType | true
    _avg?: FoodListAvgAggregateInputType
    _sum?: FoodListSumAggregateInputType
    _min?: FoodListMinAggregateInputType
    _max?: FoodListMaxAggregateInputType
  }

  export type FoodListGroupByOutputType = {
    id: number
    foodName: string
    calories: number
    _count: FoodListCountAggregateOutputType | null
    _avg: FoodListAvgAggregateOutputType | null
    _sum: FoodListSumAggregateOutputType | null
    _min: FoodListMinAggregateOutputType | null
    _max: FoodListMaxAggregateOutputType | null
  }

  type GetFoodListGroupByPayload<T extends FoodListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodListGroupByOutputType[P]>
            : GetScalarType<T[P], FoodListGroupByOutputType[P]>
        }
      >
    >


  export type FoodListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodName?: boolean
    calories?: boolean
    foodConsumed?: boolean | FoodList$foodConsumedArgs<ExtArgs>
    _count?: boolean | FoodListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodList"]>

  export type FoodListSelectScalar = {
    id?: boolean
    foodName?: boolean
    calories?: boolean
  }

  export type FoodListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodConsumed?: boolean | FoodList$foodConsumedArgs<ExtArgs>
    _count?: boolean | FoodListCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FoodListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodList"
    objects: {
      foodConsumed: Prisma.$FoodConsumedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      foodName: string
      calories: number
    }, ExtArgs["result"]["foodList"]>
    composites: {}
  }


  type FoodListGetPayload<S extends boolean | null | undefined | FoodListDefaultArgs> = $Result.GetResult<Prisma.$FoodListPayload, S>

  type FoodListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodListFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FoodListCountAggregateInputType | true
    }

  export interface FoodListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodList'], meta: { name: 'FoodList' } }
    /**
     * Find zero or one FoodList that matches the filter.
     * @param {FoodListFindUniqueArgs} args - Arguments to find a FoodList
     * @example
     * // Get one FoodList
     * const foodList = await prisma.foodList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FoodListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FoodListFindUniqueArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FoodList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FoodListFindUniqueOrThrowArgs} args - Arguments to find a FoodList
     * @example
     * // Get one FoodList
     * const foodList = await prisma.foodList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FoodListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FoodList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListFindFirstArgs} args - Arguments to find a FoodList
     * @example
     * // Get one FoodList
     * const foodList = await prisma.foodList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FoodListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodListFindFirstArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FoodList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListFindFirstOrThrowArgs} args - Arguments to find a FoodList
     * @example
     * // Get one FoodList
     * const foodList = await prisma.foodList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FoodListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FoodLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodLists
     * const foodLists = await prisma.foodList.findMany()
     * 
     * // Get first 10 FoodLists
     * const foodLists = await prisma.foodList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodListWithIdOnly = await prisma.foodList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FoodListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FoodList.
     * @param {FoodListCreateArgs} args - Arguments to create a FoodList.
     * @example
     * // Create one FoodList
     * const FoodList = await prisma.foodList.create({
     *   data: {
     *     // ... data to create a FoodList
     *   }
     * })
     * 
    **/
    create<T extends FoodListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodListCreateArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FoodLists.
     *     @param {FoodListCreateManyArgs} args - Arguments to create many FoodLists.
     *     @example
     *     // Create many FoodLists
     *     const foodList = await prisma.foodList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FoodListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodList.
     * @param {FoodListDeleteArgs} args - Arguments to delete one FoodList.
     * @example
     * // Delete one FoodList
     * const FoodList = await prisma.foodList.delete({
     *   where: {
     *     // ... filter to delete one FoodList
     *   }
     * })
     * 
    **/
    delete<T extends FoodListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FoodListDeleteArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FoodList.
     * @param {FoodListUpdateArgs} args - Arguments to update one FoodList.
     * @example
     * // Update one FoodList
     * const foodList = await prisma.foodList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FoodListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodListUpdateArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FoodLists.
     * @param {FoodListDeleteManyArgs} args - Arguments to filter FoodLists to delete.
     * @example
     * // Delete a few FoodLists
     * const { count } = await prisma.foodList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FoodListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodLists
     * const foodList = await prisma.foodList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FoodListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FoodListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodList.
     * @param {FoodListUpsertArgs} args - Arguments to update or create a FoodList.
     * @example
     * // Update or create a FoodList
     * const foodList = await prisma.foodList.upsert({
     *   create: {
     *     // ... data to create a FoodList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodList we want to update
     *   }
     * })
    **/
    upsert<T extends FoodListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FoodListUpsertArgs<ExtArgs>>
    ): Prisma__FoodListClient<$Result.GetResult<Prisma.$FoodListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FoodLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListCountArgs} args - Arguments to filter FoodLists to count.
     * @example
     * // Count the number of FoodLists
     * const count = await prisma.foodList.count({
     *   where: {
     *     // ... the filter for the FoodLists we want to count
     *   }
     * })
    **/
    count<T extends FoodListCountArgs>(
      args?: Subset<T, FoodListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodListAggregateArgs>(args: Subset<T, FoodListAggregateArgs>): Prisma.PrismaPromise<GetFoodListAggregateType<T>>

    /**
     * Group by FoodList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodListGroupByArgs['orderBy'] }
        : { orderBy?: FoodListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodList model
   */
  readonly fields: FoodListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    foodConsumed<T extends FoodList$foodConsumedArgs<ExtArgs> = {}>(args?: Subset<T, FoodList$foodConsumedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodConsumedPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FoodList model
   */ 
  interface FoodListFieldRefs {
    readonly id: FieldRef<"FoodList", 'Int'>
    readonly foodName: FieldRef<"FoodList", 'String'>
    readonly calories: FieldRef<"FoodList", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * FoodList findUnique
   */
  export type FoodListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * Filter, which FoodList to fetch.
     */
    where: FoodListWhereUniqueInput
  }


  /**
   * FoodList findUniqueOrThrow
   */
  export type FoodListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * Filter, which FoodList to fetch.
     */
    where: FoodListWhereUniqueInput
  }


  /**
   * FoodList findFirst
   */
  export type FoodListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * Filter, which FoodList to fetch.
     */
    where?: FoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLists to fetch.
     */
    orderBy?: FoodListOrderByWithRelationInput | FoodListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodLists.
     */
    cursor?: FoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodLists.
     */
    distinct?: FoodListScalarFieldEnum | FoodListScalarFieldEnum[]
  }


  /**
   * FoodList findFirstOrThrow
   */
  export type FoodListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * Filter, which FoodList to fetch.
     */
    where?: FoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLists to fetch.
     */
    orderBy?: FoodListOrderByWithRelationInput | FoodListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodLists.
     */
    cursor?: FoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodLists.
     */
    distinct?: FoodListScalarFieldEnum | FoodListScalarFieldEnum[]
  }


  /**
   * FoodList findMany
   */
  export type FoodListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * Filter, which FoodLists to fetch.
     */
    where?: FoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLists to fetch.
     */
    orderBy?: FoodListOrderByWithRelationInput | FoodListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodLists.
     */
    cursor?: FoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLists.
     */
    skip?: number
    distinct?: FoodListScalarFieldEnum | FoodListScalarFieldEnum[]
  }


  /**
   * FoodList create
   */
  export type FoodListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodList.
     */
    data: XOR<FoodListCreateInput, FoodListUncheckedCreateInput>
  }


  /**
   * FoodList createMany
   */
  export type FoodListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodLists.
     */
    data: FoodListCreateManyInput | FoodListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FoodList update
   */
  export type FoodListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodList.
     */
    data: XOR<FoodListUpdateInput, FoodListUncheckedUpdateInput>
    /**
     * Choose, which FoodList to update.
     */
    where: FoodListWhereUniqueInput
  }


  /**
   * FoodList updateMany
   */
  export type FoodListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodLists.
     */
    data: XOR<FoodListUpdateManyMutationInput, FoodListUncheckedUpdateManyInput>
    /**
     * Filter which FoodLists to update
     */
    where?: FoodListWhereInput
  }


  /**
   * FoodList upsert
   */
  export type FoodListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodList to update in case it exists.
     */
    where: FoodListWhereUniqueInput
    /**
     * In case the FoodList found by the `where` argument doesn't exist, create a new FoodList with this data.
     */
    create: XOR<FoodListCreateInput, FoodListUncheckedCreateInput>
    /**
     * In case the FoodList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodListUpdateInput, FoodListUncheckedUpdateInput>
  }


  /**
   * FoodList delete
   */
  export type FoodListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
    /**
     * Filter which FoodList to delete.
     */
    where: FoodListWhereUniqueInput
  }


  /**
   * FoodList deleteMany
   */
  export type FoodListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodLists to delete
     */
    where?: FoodListWhereInput
  }


  /**
   * FoodList.foodConsumed
   */
  export type FoodList$foodConsumedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodConsumed
     */
    select?: FoodConsumedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodConsumedInclude<ExtArgs> | null
    where?: FoodConsumedWhereInput
    orderBy?: FoodConsumedOrderByWithRelationInput | FoodConsumedOrderByWithRelationInput[]
    cursor?: FoodConsumedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodConsumedScalarFieldEnum | FoodConsumedScalarFieldEnum[]
  }


  /**
   * FoodList without action
   */
  export type FoodListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodList
     */
    select?: FoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodListInclude<ExtArgs> | null
  }



  /**
   * Model Water
   */

  export type AggregateWater = {
    _count: WaterCountAggregateOutputType | null
    _avg: WaterAvgAggregateOutputType | null
    _sum: WaterSumAggregateOutputType | null
    _min: WaterMinAggregateOutputType | null
    _max: WaterMaxAggregateOutputType | null
  }

  export type WaterAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    waterActual: number | null
    target: number | null
  }

  export type WaterSumAggregateOutputType = {
    id: number | null
    userId: number | null
    waterActual: number | null
    target: number | null
  }

  export type WaterMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    waterActual: number | null
    target: number | null
  }

  export type WaterMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    waterActual: number | null
    target: number | null
  }

  export type WaterCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    waterActual: number
    target: number
    _all: number
  }


  export type WaterAvgAggregateInputType = {
    id?: true
    userId?: true
    waterActual?: true
    target?: true
  }

  export type WaterSumAggregateInputType = {
    id?: true
    userId?: true
    waterActual?: true
    target?: true
  }

  export type WaterMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    waterActual?: true
    target?: true
  }

  export type WaterMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    waterActual?: true
    target?: true
  }

  export type WaterCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    waterActual?: true
    target?: true
    _all?: true
  }

  export type WaterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Water to aggregate.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waters
    **/
    _count?: true | WaterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterMaxAggregateInputType
  }

  export type GetWaterAggregateType<T extends WaterAggregateArgs> = {
        [P in keyof T & keyof AggregateWater]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWater[P]>
      : GetScalarType<T[P], AggregateWater[P]>
  }




  export type WaterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterWhereInput
    orderBy?: WaterOrderByWithAggregationInput | WaterOrderByWithAggregationInput[]
    by: WaterScalarFieldEnum[] | WaterScalarFieldEnum
    having?: WaterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterCountAggregateInputType | true
    _avg?: WaterAvgAggregateInputType
    _sum?: WaterSumAggregateInputType
    _min?: WaterMinAggregateInputType
    _max?: WaterMaxAggregateInputType
  }

  export type WaterGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    waterActual: number
    target: number
    _count: WaterCountAggregateOutputType | null
    _avg: WaterAvgAggregateOutputType | null
    _sum: WaterSumAggregateOutputType | null
    _min: WaterMinAggregateOutputType | null
    _max: WaterMaxAggregateOutputType | null
  }

  type GetWaterGroupByPayload<T extends WaterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterGroupByOutputType[P]>
            : GetScalarType<T[P], WaterGroupByOutputType[P]>
        }
      >
    >


  export type WaterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    waterActual?: boolean
    target?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water"]>

  export type WaterSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    waterActual?: boolean
    target?: boolean
  }

  export type WaterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $WaterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Water"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      waterActual: number
      target: number
    }, ExtArgs["result"]["water"]>
    composites: {}
  }


  type WaterGetPayload<S extends boolean | null | undefined | WaterDefaultArgs> = $Result.GetResult<Prisma.$WaterPayload, S>

  type WaterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaterFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WaterCountAggregateInputType | true
    }

  export interface WaterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Water'], meta: { name: 'Water' } }
    /**
     * Find zero or one Water that matches the filter.
     * @param {WaterFindUniqueArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WaterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WaterFindUniqueArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Water that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WaterFindUniqueOrThrowArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WaterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Water that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterFindFirstArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WaterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterFindFirstArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Water that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterFindFirstOrThrowArgs} args - Arguments to find a Water
     * @example
     * // Get one Water
     * const water = await prisma.water.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WaterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Waters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waters
     * const waters = await prisma.water.findMany()
     * 
     * // Get first 10 Waters
     * const waters = await prisma.water.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterWithIdOnly = await prisma.water.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WaterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Water.
     * @param {WaterCreateArgs} args - Arguments to create a Water.
     * @example
     * // Create one Water
     * const Water = await prisma.water.create({
     *   data: {
     *     // ... data to create a Water
     *   }
     * })
     * 
    **/
    create<T extends WaterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WaterCreateArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Waters.
     *     @param {WaterCreateManyArgs} args - Arguments to create many Waters.
     *     @example
     *     // Create many Waters
     *     const water = await prisma.water.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WaterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Water.
     * @param {WaterDeleteArgs} args - Arguments to delete one Water.
     * @example
     * // Delete one Water
     * const Water = await prisma.water.delete({
     *   where: {
     *     // ... filter to delete one Water
     *   }
     * })
     * 
    **/
    delete<T extends WaterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WaterDeleteArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Water.
     * @param {WaterUpdateArgs} args - Arguments to update one Water.
     * @example
     * // Update one Water
     * const water = await prisma.water.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WaterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WaterUpdateArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Waters.
     * @param {WaterDeleteManyArgs} args - Arguments to filter Waters to delete.
     * @example
     * // Delete a few Waters
     * const { count } = await prisma.water.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WaterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waters
     * const water = await prisma.water.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WaterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WaterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Water.
     * @param {WaterUpsertArgs} args - Arguments to update or create a Water.
     * @example
     * // Update or create a Water
     * const water = await prisma.water.upsert({
     *   create: {
     *     // ... data to create a Water
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Water we want to update
     *   }
     * })
    **/
    upsert<T extends WaterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WaterUpsertArgs<ExtArgs>>
    ): Prisma__WaterClient<$Result.GetResult<Prisma.$WaterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Waters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterCountArgs} args - Arguments to filter Waters to count.
     * @example
     * // Count the number of Waters
     * const count = await prisma.water.count({
     *   where: {
     *     // ... the filter for the Waters we want to count
     *   }
     * })
    **/
    count<T extends WaterCountArgs>(
      args?: Subset<T, WaterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Water.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaterAggregateArgs>(args: Subset<T, WaterAggregateArgs>): Prisma.PrismaPromise<GetWaterAggregateType<T>>

    /**
     * Group by Water.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterGroupByArgs['orderBy'] }
        : { orderBy?: WaterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Water model
   */
  readonly fields: WaterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Water.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Water model
   */ 
  interface WaterFieldRefs {
    readonly id: FieldRef<"Water", 'Int'>
    readonly userId: FieldRef<"Water", 'Int'>
    readonly createdAt: FieldRef<"Water", 'DateTime'>
    readonly waterActual: FieldRef<"Water", 'Int'>
    readonly target: FieldRef<"Water", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Water findUnique
   */
  export type WaterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where: WaterWhereUniqueInput
  }


  /**
   * Water findUniqueOrThrow
   */
  export type WaterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where: WaterWhereUniqueInput
  }


  /**
   * Water findFirst
   */
  export type WaterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waters.
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waters.
     */
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }


  /**
   * Water findFirstOrThrow
   */
  export type WaterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Water to fetch.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waters.
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waters.
     */
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }


  /**
   * Water findMany
   */
  export type WaterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter, which Waters to fetch.
     */
    where?: WaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waters to fetch.
     */
    orderBy?: WaterOrderByWithRelationInput | WaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waters.
     */
    cursor?: WaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waters.
     */
    skip?: number
    distinct?: WaterScalarFieldEnum | WaterScalarFieldEnum[]
  }


  /**
   * Water create
   */
  export type WaterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * The data needed to create a Water.
     */
    data: XOR<WaterCreateInput, WaterUncheckedCreateInput>
  }


  /**
   * Water createMany
   */
  export type WaterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waters.
     */
    data: WaterCreateManyInput | WaterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Water update
   */
  export type WaterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * The data needed to update a Water.
     */
    data: XOR<WaterUpdateInput, WaterUncheckedUpdateInput>
    /**
     * Choose, which Water to update.
     */
    where: WaterWhereUniqueInput
  }


  /**
   * Water updateMany
   */
  export type WaterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waters.
     */
    data: XOR<WaterUpdateManyMutationInput, WaterUncheckedUpdateManyInput>
    /**
     * Filter which Waters to update
     */
    where?: WaterWhereInput
  }


  /**
   * Water upsert
   */
  export type WaterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * The filter to search for the Water to update in case it exists.
     */
    where: WaterWhereUniqueInput
    /**
     * In case the Water found by the `where` argument doesn't exist, create a new Water with this data.
     */
    create: XOR<WaterCreateInput, WaterUncheckedCreateInput>
    /**
     * In case the Water was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterUpdateInput, WaterUncheckedUpdateInput>
  }


  /**
   * Water delete
   */
  export type WaterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
    /**
     * Filter which Water to delete.
     */
    where: WaterWhereUniqueInput
  }


  /**
   * Water deleteMany
   */
  export type WaterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waters to delete
     */
    where?: WaterWhereInput
  }


  /**
   * Water without action
   */
  export type WaterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water
     */
    select?: WaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterInclude<ExtArgs> | null
  }



  /**
   * Model Meditation
   */

  export type AggregateMeditation = {
    _count: MeditationCountAggregateOutputType | null
    _avg: MeditationAvgAggregateOutputType | null
    _sum: MeditationSumAggregateOutputType | null
    _min: MeditationMinAggregateOutputType | null
    _max: MeditationMaxAggregateOutputType | null
  }

  export type MeditationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    medicationActual: number | null
    target: number | null
  }

  export type MeditationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    medicationActual: number | null
    target: number | null
  }

  export type MeditationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    medicationActual: number | null
    target: number | null
  }

  export type MeditationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    medicationActual: number | null
    target: number | null
  }

  export type MeditationCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    medicationActual: number
    target: number
    _all: number
  }


  export type MeditationAvgAggregateInputType = {
    id?: true
    userId?: true
    medicationActual?: true
    target?: true
  }

  export type MeditationSumAggregateInputType = {
    id?: true
    userId?: true
    medicationActual?: true
    target?: true
  }

  export type MeditationMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    medicationActual?: true
    target?: true
  }

  export type MeditationMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    medicationActual?: true
    target?: true
  }

  export type MeditationCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    medicationActual?: true
    target?: true
    _all?: true
  }

  export type MeditationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meditation to aggregate.
     */
    where?: MeditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meditations to fetch.
     */
    orderBy?: MeditationOrderByWithRelationInput | MeditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meditations
    **/
    _count?: true | MeditationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeditationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeditationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeditationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeditationMaxAggregateInputType
  }

  export type GetMeditationAggregateType<T extends MeditationAggregateArgs> = {
        [P in keyof T & keyof AggregateMeditation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeditation[P]>
      : GetScalarType<T[P], AggregateMeditation[P]>
  }




  export type MeditationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeditationWhereInput
    orderBy?: MeditationOrderByWithAggregationInput | MeditationOrderByWithAggregationInput[]
    by: MeditationScalarFieldEnum[] | MeditationScalarFieldEnum
    having?: MeditationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeditationCountAggregateInputType | true
    _avg?: MeditationAvgAggregateInputType
    _sum?: MeditationSumAggregateInputType
    _min?: MeditationMinAggregateInputType
    _max?: MeditationMaxAggregateInputType
  }

  export type MeditationGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    medicationActual: number
    target: number
    _count: MeditationCountAggregateOutputType | null
    _avg: MeditationAvgAggregateOutputType | null
    _sum: MeditationSumAggregateOutputType | null
    _min: MeditationMinAggregateOutputType | null
    _max: MeditationMaxAggregateOutputType | null
  }

  type GetMeditationGroupByPayload<T extends MeditationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeditationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeditationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeditationGroupByOutputType[P]>
            : GetScalarType<T[P], MeditationGroupByOutputType[P]>
        }
      >
    >


  export type MeditationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    medicationActual?: boolean
    target?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meditation"]>

  export type MeditationSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    medicationActual?: boolean
    target?: boolean
  }

  export type MeditationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MeditationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meditation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      medicationActual: number
      target: number
    }, ExtArgs["result"]["meditation"]>
    composites: {}
  }


  type MeditationGetPayload<S extends boolean | null | undefined | MeditationDefaultArgs> = $Result.GetResult<Prisma.$MeditationPayload, S>

  type MeditationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeditationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MeditationCountAggregateInputType | true
    }

  export interface MeditationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meditation'], meta: { name: 'Meditation' } }
    /**
     * Find zero or one Meditation that matches the filter.
     * @param {MeditationFindUniqueArgs} args - Arguments to find a Meditation
     * @example
     * // Get one Meditation
     * const meditation = await prisma.meditation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MeditationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MeditationFindUniqueArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Meditation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MeditationFindUniqueOrThrowArgs} args - Arguments to find a Meditation
     * @example
     * // Get one Meditation
     * const meditation = await prisma.meditation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MeditationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MeditationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Meditation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationFindFirstArgs} args - Arguments to find a Meditation
     * @example
     * // Get one Meditation
     * const meditation = await prisma.meditation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MeditationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MeditationFindFirstArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Meditation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationFindFirstOrThrowArgs} args - Arguments to find a Meditation
     * @example
     * // Get one Meditation
     * const meditation = await prisma.meditation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MeditationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MeditationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Meditations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meditations
     * const meditations = await prisma.meditation.findMany()
     * 
     * // Get first 10 Meditations
     * const meditations = await prisma.meditation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meditationWithIdOnly = await prisma.meditation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MeditationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MeditationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Meditation.
     * @param {MeditationCreateArgs} args - Arguments to create a Meditation.
     * @example
     * // Create one Meditation
     * const Meditation = await prisma.meditation.create({
     *   data: {
     *     // ... data to create a Meditation
     *   }
     * })
     * 
    **/
    create<T extends MeditationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MeditationCreateArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Meditations.
     *     @param {MeditationCreateManyArgs} args - Arguments to create many Meditations.
     *     @example
     *     // Create many Meditations
     *     const meditation = await prisma.meditation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MeditationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MeditationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meditation.
     * @param {MeditationDeleteArgs} args - Arguments to delete one Meditation.
     * @example
     * // Delete one Meditation
     * const Meditation = await prisma.meditation.delete({
     *   where: {
     *     // ... filter to delete one Meditation
     *   }
     * })
     * 
    **/
    delete<T extends MeditationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MeditationDeleteArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Meditation.
     * @param {MeditationUpdateArgs} args - Arguments to update one Meditation.
     * @example
     * // Update one Meditation
     * const meditation = await prisma.meditation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MeditationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MeditationUpdateArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Meditations.
     * @param {MeditationDeleteManyArgs} args - Arguments to filter Meditations to delete.
     * @example
     * // Delete a few Meditations
     * const { count } = await prisma.meditation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MeditationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MeditationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meditations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meditations
     * const meditation = await prisma.meditation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MeditationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MeditationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meditation.
     * @param {MeditationUpsertArgs} args - Arguments to update or create a Meditation.
     * @example
     * // Update or create a Meditation
     * const meditation = await prisma.meditation.upsert({
     *   create: {
     *     // ... data to create a Meditation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meditation we want to update
     *   }
     * })
    **/
    upsert<T extends MeditationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MeditationUpsertArgs<ExtArgs>>
    ): Prisma__MeditationClient<$Result.GetResult<Prisma.$MeditationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Meditations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationCountArgs} args - Arguments to filter Meditations to count.
     * @example
     * // Count the number of Meditations
     * const count = await prisma.meditation.count({
     *   where: {
     *     // ... the filter for the Meditations we want to count
     *   }
     * })
    **/
    count<T extends MeditationCountArgs>(
      args?: Subset<T, MeditationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeditationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meditation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeditationAggregateArgs>(args: Subset<T, MeditationAggregateArgs>): Prisma.PrismaPromise<GetMeditationAggregateType<T>>

    /**
     * Group by Meditation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeditationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeditationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeditationGroupByArgs['orderBy'] }
        : { orderBy?: MeditationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeditationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeditationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meditation model
   */
  readonly fields: MeditationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meditation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeditationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Meditation model
   */ 
  interface MeditationFieldRefs {
    readonly id: FieldRef<"Meditation", 'Int'>
    readonly userId: FieldRef<"Meditation", 'Int'>
    readonly createdAt: FieldRef<"Meditation", 'DateTime'>
    readonly medicationActual: FieldRef<"Meditation", 'Int'>
    readonly target: FieldRef<"Meditation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Meditation findUnique
   */
  export type MeditationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * Filter, which Meditation to fetch.
     */
    where: MeditationWhereUniqueInput
  }


  /**
   * Meditation findUniqueOrThrow
   */
  export type MeditationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * Filter, which Meditation to fetch.
     */
    where: MeditationWhereUniqueInput
  }


  /**
   * Meditation findFirst
   */
  export type MeditationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * Filter, which Meditation to fetch.
     */
    where?: MeditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meditations to fetch.
     */
    orderBy?: MeditationOrderByWithRelationInput | MeditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meditations.
     */
    cursor?: MeditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meditations.
     */
    distinct?: MeditationScalarFieldEnum | MeditationScalarFieldEnum[]
  }


  /**
   * Meditation findFirstOrThrow
   */
  export type MeditationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * Filter, which Meditation to fetch.
     */
    where?: MeditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meditations to fetch.
     */
    orderBy?: MeditationOrderByWithRelationInput | MeditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meditations.
     */
    cursor?: MeditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meditations.
     */
    distinct?: MeditationScalarFieldEnum | MeditationScalarFieldEnum[]
  }


  /**
   * Meditation findMany
   */
  export type MeditationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * Filter, which Meditations to fetch.
     */
    where?: MeditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meditations to fetch.
     */
    orderBy?: MeditationOrderByWithRelationInput | MeditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meditations.
     */
    cursor?: MeditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meditations.
     */
    skip?: number
    distinct?: MeditationScalarFieldEnum | MeditationScalarFieldEnum[]
  }


  /**
   * Meditation create
   */
  export type MeditationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * The data needed to create a Meditation.
     */
    data: XOR<MeditationCreateInput, MeditationUncheckedCreateInput>
  }


  /**
   * Meditation createMany
   */
  export type MeditationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meditations.
     */
    data: MeditationCreateManyInput | MeditationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Meditation update
   */
  export type MeditationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * The data needed to update a Meditation.
     */
    data: XOR<MeditationUpdateInput, MeditationUncheckedUpdateInput>
    /**
     * Choose, which Meditation to update.
     */
    where: MeditationWhereUniqueInput
  }


  /**
   * Meditation updateMany
   */
  export type MeditationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meditations.
     */
    data: XOR<MeditationUpdateManyMutationInput, MeditationUncheckedUpdateManyInput>
    /**
     * Filter which Meditations to update
     */
    where?: MeditationWhereInput
  }


  /**
   * Meditation upsert
   */
  export type MeditationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * The filter to search for the Meditation to update in case it exists.
     */
    where: MeditationWhereUniqueInput
    /**
     * In case the Meditation found by the `where` argument doesn't exist, create a new Meditation with this data.
     */
    create: XOR<MeditationCreateInput, MeditationUncheckedCreateInput>
    /**
     * In case the Meditation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeditationUpdateInput, MeditationUncheckedUpdateInput>
  }


  /**
   * Meditation delete
   */
  export type MeditationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
    /**
     * Filter which Meditation to delete.
     */
    where: MeditationWhereUniqueInput
  }


  /**
   * Meditation deleteMany
   */
  export type MeditationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meditations to delete
     */
    where?: MeditationWhereInput
  }


  /**
   * Meditation without action
   */
  export type MeditationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meditation
     */
    select?: MeditationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MeditationInclude<ExtArgs> | null
  }



  /**
   * Model Mood
   */

  export type AggregateMood = {
    _count: MoodCountAggregateOutputType | null
    _avg: MoodAvgAggregateOutputType | null
    _sum: MoodSumAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  export type MoodAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MoodSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MoodMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    currentMood: $Enums.Todaymood | null
  }

  export type MoodMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    currentMood: $Enums.Todaymood | null
  }

  export type MoodCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    currentMood: number
    _all: number
  }


  export type MoodAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MoodSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MoodMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    currentMood?: true
  }

  export type MoodMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    currentMood?: true
  }

  export type MoodCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    currentMood?: true
    _all?: true
  }

  export type MoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mood to aggregate.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moods
    **/
    _count?: true | MoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodMaxAggregateInputType
  }

  export type GetMoodAggregateType<T extends MoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMood[P]>
      : GetScalarType<T[P], AggregateMood[P]>
  }




  export type MoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithAggregationInput | MoodOrderByWithAggregationInput[]
    by: MoodScalarFieldEnum[] | MoodScalarFieldEnum
    having?: MoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodCountAggregateInputType | true
    _avg?: MoodAvgAggregateInputType
    _sum?: MoodSumAggregateInputType
    _min?: MoodMinAggregateInputType
    _max?: MoodMaxAggregateInputType
  }

  export type MoodGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    currentMood: $Enums.Todaymood
    _count: MoodCountAggregateOutputType | null
    _avg: MoodAvgAggregateOutputType | null
    _sum: MoodSumAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  type GetMoodGroupByPayload<T extends MoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodGroupByOutputType[P]>
            : GetScalarType<T[P], MoodGroupByOutputType[P]>
        }
      >
    >


  export type MoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    currentMood?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    currentMood?: boolean
  }

  export type MoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mood"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      currentMood: $Enums.Todaymood
    }, ExtArgs["result"]["mood"]>
    composites: {}
  }


  type MoodGetPayload<S extends boolean | null | undefined | MoodDefaultArgs> = $Result.GetResult<Prisma.$MoodPayload, S>

  type MoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MoodFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MoodCountAggregateInputType | true
    }

  export interface MoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mood'], meta: { name: 'Mood' } }
    /**
     * Find zero or one Mood that matches the filter.
     * @param {MoodFindUniqueArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MoodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MoodFindUniqueArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mood that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MoodFindUniqueOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MoodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MoodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MoodFindFirstArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MoodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Moods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moods
     * const moods = await prisma.mood.findMany()
     * 
     * // Get first 10 Moods
     * const moods = await prisma.mood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodWithIdOnly = await prisma.mood.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MoodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mood.
     * @param {MoodCreateArgs} args - Arguments to create a Mood.
     * @example
     * // Create one Mood
     * const Mood = await prisma.mood.create({
     *   data: {
     *     // ... data to create a Mood
     *   }
     * })
     * 
    **/
    create<T extends MoodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MoodCreateArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Moods.
     *     @param {MoodCreateManyArgs} args - Arguments to create many Moods.
     *     @example
     *     // Create many Moods
     *     const mood = await prisma.mood.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MoodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mood.
     * @param {MoodDeleteArgs} args - Arguments to delete one Mood.
     * @example
     * // Delete one Mood
     * const Mood = await prisma.mood.delete({
     *   where: {
     *     // ... filter to delete one Mood
     *   }
     * })
     * 
    **/
    delete<T extends MoodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MoodDeleteArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mood.
     * @param {MoodUpdateArgs} args - Arguments to update one Mood.
     * @example
     * // Update one Mood
     * const mood = await prisma.mood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MoodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MoodUpdateArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Moods.
     * @param {MoodDeleteManyArgs} args - Arguments to filter Moods to delete.
     * @example
     * // Delete a few Moods
     * const { count } = await prisma.mood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MoodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MoodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MoodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mood.
     * @param {MoodUpsertArgs} args - Arguments to update or create a Mood.
     * @example
     * // Update or create a Mood
     * const mood = await prisma.mood.upsert({
     *   create: {
     *     // ... data to create a Mood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mood we want to update
     *   }
     * })
    **/
    upsert<T extends MoodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MoodUpsertArgs<ExtArgs>>
    ): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCountArgs} args - Arguments to filter Moods to count.
     * @example
     * // Count the number of Moods
     * const count = await prisma.mood.count({
     *   where: {
     *     // ... the filter for the Moods we want to count
     *   }
     * })
    **/
    count<T extends MoodCountArgs>(
      args?: Subset<T, MoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodAggregateArgs>(args: Subset<T, MoodAggregateArgs>): Prisma.PrismaPromise<GetMoodAggregateType<T>>

    /**
     * Group by Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodGroupByArgs['orderBy'] }
        : { orderBy?: MoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mood model
   */
  readonly fields: MoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Mood model
   */ 
  interface MoodFieldRefs {
    readonly id: FieldRef<"Mood", 'Int'>
    readonly userId: FieldRef<"Mood", 'Int'>
    readonly createdAt: FieldRef<"Mood", 'DateTime'>
    readonly currentMood: FieldRef<"Mood", 'Todaymood'>
  }
    

  // Custom InputTypes

  /**
   * Mood findUnique
   */
  export type MoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }


  /**
   * Mood findUniqueOrThrow
   */
  export type MoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }


  /**
   * Mood findFirst
   */
  export type MoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }


  /**
   * Mood findFirstOrThrow
   */
  export type MoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }


  /**
   * Mood findMany
   */
  export type MoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Moods to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }


  /**
   * Mood create
   */
  export type MoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Mood.
     */
    data: XOR<MoodCreateInput, MoodUncheckedCreateInput>
  }


  /**
   * Mood createMany
   */
  export type MoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Mood update
   */
  export type MoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Mood.
     */
    data: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
    /**
     * Choose, which Mood to update.
     */
    where: MoodWhereUniqueInput
  }


  /**
   * Mood updateMany
   */
  export type MoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
  }


  /**
   * Mood upsert
   */
  export type MoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Mood to update in case it exists.
     */
    where: MoodWhereUniqueInput
    /**
     * In case the Mood found by the `where` argument doesn't exist, create a new Mood with this data.
     */
    create: XOR<MoodCreateInput, MoodUncheckedCreateInput>
    /**
     * In case the Mood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
  }


  /**
   * Mood delete
   */
  export type MoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter which Mood to delete.
     */
    where: MoodWhereUniqueInput
  }


  /**
   * Mood deleteMany
   */
  export type MoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moods to delete
     */
    where?: MoodWhereInput
  }


  /**
   * Mood without action
   */
  export type MoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoodInclude<ExtArgs> | null
  }



  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sleepActual: number | null
    sleepTarget: number | null
    stepsActual: number | null
    stepsTarget: number | null
    foodCaloriesActual: number | null
    foodCaloriesTarget: number | null
    waterActual: number | null
    waterTarget: number | null
    meditationActual: number | null
    meditationTarget: number | null
    category: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sleepActual: number | null
    sleepTarget: number | null
    stepsActual: number | null
    stepsTarget: number | null
    foodCaloriesActual: number | null
    foodCaloriesTarget: number | null
    waterActual: number | null
    waterTarget: number | null
    meditationActual: number | null
    meditationTarget: number | null
    category: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    date: Date | null
    userId: number | null
    sleepActual: number | null
    sleepTarget: number | null
    stepsActual: number | null
    stepsTarget: number | null
    foodCaloriesActual: number | null
    foodCaloriesTarget: number | null
    waterActual: number | null
    waterTarget: number | null
    meditationActual: number | null
    meditationTarget: number | null
    mood: $Enums.Todaymood | null
    category: number | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    userId: number | null
    sleepActual: number | null
    sleepTarget: number | null
    stepsActual: number | null
    stepsTarget: number | null
    foodCaloriesActual: number | null
    foodCaloriesTarget: number | null
    waterActual: number | null
    waterTarget: number | null
    meditationActual: number | null
    meditationTarget: number | null
    mood: $Enums.Todaymood | null
    category: number | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: number
    category: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    userId?: true
    sleepActual?: true
    sleepTarget?: true
    stepsActual?: true
    stepsTarget?: true
    foodCaloriesActual?: true
    foodCaloriesTarget?: true
    waterActual?: true
    waterTarget?: true
    meditationActual?: true
    meditationTarget?: true
    category?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    userId?: true
    sleepActual?: true
    sleepTarget?: true
    stepsActual?: true
    stepsTarget?: true
    foodCaloriesActual?: true
    foodCaloriesTarget?: true
    waterActual?: true
    waterTarget?: true
    meditationActual?: true
    meditationTarget?: true
    category?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    sleepActual?: true
    sleepTarget?: true
    stepsActual?: true
    stepsTarget?: true
    foodCaloriesActual?: true
    foodCaloriesTarget?: true
    waterActual?: true
    waterTarget?: true
    meditationActual?: true
    meditationTarget?: true
    mood?: true
    category?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    sleepActual?: true
    sleepTarget?: true
    stepsActual?: true
    stepsTarget?: true
    foodCaloriesActual?: true
    foodCaloriesTarget?: true
    waterActual?: true
    waterTarget?: true
    meditationActual?: true
    meditationTarget?: true
    mood?: true
    category?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    sleepActual?: true
    sleepTarget?: true
    stepsActual?: true
    stepsTarget?: true
    foodCaloriesActual?: true
    foodCaloriesTarget?: true
    waterActual?: true
    waterTarget?: true
    meditationActual?: true
    meditationTarget?: true
    mood?: true
    category?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    date: Date
    userId: number
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: $Enums.Todaymood
    category: number | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    sleepActual?: boolean
    sleepTarget?: boolean
    stepsActual?: boolean
    stepsTarget?: boolean
    foodCaloriesActual?: boolean
    foodCaloriesTarget?: boolean
    waterActual?: boolean
    waterTarget?: boolean
    meditationActual?: boolean
    meditationTarget?: boolean
    mood?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    sleepActual?: boolean
    sleepTarget?: boolean
    stepsActual?: boolean
    stepsTarget?: boolean
    foodCaloriesActual?: boolean
    foodCaloriesTarget?: boolean
    waterActual?: boolean
    waterTarget?: boolean
    meditationActual?: boolean
    meditationTarget?: boolean
    mood?: boolean
    category?: boolean
  }

  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      userId: number
      sleepActual: number
      sleepTarget: number
      stepsActual: number
      stepsTarget: number
      foodCaloriesActual: number
      foodCaloriesTarget: number
      waterActual: number
      waterTarget: number
      meditationActual: number
      meditationTarget: number
      mood: $Enums.Todaymood
      category: number | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }


  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Report that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
    **/
    create<T extends ReportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportCreateArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reports.
     *     @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     *     @example
     *     // Create many Reports
     *     const report = await prisma.report.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
    **/
    delete<T extends ReportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
    **/
    upsert<T extends ReportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>
    ): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Report model
   */ 
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly date: FieldRef<"Report", 'DateTime'>
    readonly userId: FieldRef<"Report", 'Int'>
    readonly sleepActual: FieldRef<"Report", 'Int'>
    readonly sleepTarget: FieldRef<"Report", 'Int'>
    readonly stepsActual: FieldRef<"Report", 'Int'>
    readonly stepsTarget: FieldRef<"Report", 'Int'>
    readonly foodCaloriesActual: FieldRef<"Report", 'Int'>
    readonly foodCaloriesTarget: FieldRef<"Report", 'Int'>
    readonly waterActual: FieldRef<"Report", 'Int'>
    readonly waterTarget: FieldRef<"Report", 'Int'>
    readonly meditationActual: FieldRef<"Report", 'Int'>
    readonly meditationTarget: FieldRef<"Report", 'Int'>
    readonly mood: FieldRef<"Report", 'Todaymood'>
    readonly category: FieldRef<"Report", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }


  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }


  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }


  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }


  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }


  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }


  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }


  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
  }


  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }


  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }


  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
  }


  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    googleId: 'googleId',
    password: 'password',
    isEmailVerified: 'isEmailVerified',
    verificationToken: 'verificationToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nickname: 'nickname',
    weight: 'weight',
    height: 'height',
    gender: 'gender',
    age: 'age',
    activeness: 'activeness'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SleepScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    sleepStart: 'sleepStart',
    sleepEnd: 'sleepEnd',
    sleepActual: 'sleepActual',
    target: 'target'
  };

  export type SleepScalarFieldEnum = (typeof SleepScalarFieldEnum)[keyof typeof SleepScalarFieldEnum]


  export const StepsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    stepsActual: 'stepsActual',
    target: 'target'
  };

  export type StepsScalarFieldEnum = (typeof StepsScalarFieldEnum)[keyof typeof StepsScalarFieldEnum]


  export const CaloriesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    amr: 'amr',
    bmi: 'bmi',
    actual: 'actual',
    target: 'target'
  };

  export type CaloriesScalarFieldEnum = (typeof CaloriesScalarFieldEnum)[keyof typeof CaloriesScalarFieldEnum]


  export const FoodConsumedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    foodName: 'foodName',
    calories: 'calories',
    uniqueId: 'uniqueId'
  };

  export type FoodConsumedScalarFieldEnum = (typeof FoodConsumedScalarFieldEnum)[keyof typeof FoodConsumedScalarFieldEnum]


  export const FoodListScalarFieldEnum: {
    id: 'id',
    foodName: 'foodName',
    calories: 'calories'
  };

  export type FoodListScalarFieldEnum = (typeof FoodListScalarFieldEnum)[keyof typeof FoodListScalarFieldEnum]


  export const WaterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    waterActual: 'waterActual',
    target: 'target'
  };

  export type WaterScalarFieldEnum = (typeof WaterScalarFieldEnum)[keyof typeof WaterScalarFieldEnum]


  export const MeditationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    medicationActual: 'medicationActual',
    target: 'target'
  };

  export type MeditationScalarFieldEnum = (typeof MeditationScalarFieldEnum)[keyof typeof MeditationScalarFieldEnum]


  export const MoodScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    currentMood: 'currentMood'
  };

  export type MoodScalarFieldEnum = (typeof MoodScalarFieldEnum)[keyof typeof MoodScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    sleepActual: 'sleepActual',
    sleepTarget: 'sleepTarget',
    stepsActual: 'stepsActual',
    stepsTarget: 'stepsTarget',
    foodCaloriesActual: 'foodCaloriesActual',
    foodCaloriesTarget: 'foodCaloriesTarget',
    waterActual: 'waterActual',
    waterTarget: 'waterTarget',
    meditationActual: 'meditationActual',
    meditationTarget: 'meditationTarget',
    mood: 'mood',
    category: 'category'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Activeness'
   */
  export type EnumActivenessFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Activeness'>
    


  /**
   * Reference to a field of type 'Activeness[]'
   */
  export type ListEnumActivenessFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Activeness[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Todaymood'
   */
  export type EnumTodaymoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Todaymood'>
    


  /**
   * Reference to a field of type 'Todaymood[]'
   */
  export type ListEnumTodaymoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Todaymood[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    verificationToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    nickname?: StringNullableFilter<"User"> | string | null
    weight?: IntNullableFilter<"User"> | number | null
    height?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    age?: IntNullableFilter<"User"> | number | null
    activeness?: EnumActivenessNullableFilter<"User"> | $Enums.Activeness | null
    sleep?: SleepListRelationFilter
    steps?: StepsListRelationFilter
    food?: CaloriesListRelationFilter
    water?: WaterListRelationFilter
    meditation?: MeditationListRelationFilter
    mood?: MoodListRelationFilter
    report?: ReportListRelationFilter
    foodConsumed?: FoodConsumedListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    activeness?: SortOrderInput | SortOrder
    sleep?: SleepOrderByRelationAggregateInput
    steps?: StepsOrderByRelationAggregateInput
    food?: CaloriesOrderByRelationAggregateInput
    water?: WaterOrderByRelationAggregateInput
    meditation?: MeditationOrderByRelationAggregateInput
    mood?: MoodOrderByRelationAggregateInput
    report?: ReportOrderByRelationAggregateInput
    foodConsumed?: FoodConsumedOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    googleId?: string
    verificationToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    nickname?: StringNullableFilter<"User"> | string | null
    weight?: IntNullableFilter<"User"> | number | null
    height?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    age?: IntNullableFilter<"User"> | number | null
    activeness?: EnumActivenessNullableFilter<"User"> | $Enums.Activeness | null
    sleep?: SleepListRelationFilter
    steps?: StepsListRelationFilter
    food?: CaloriesListRelationFilter
    water?: WaterListRelationFilter
    meditation?: MeditationListRelationFilter
    mood?: MoodListRelationFilter
    report?: ReportListRelationFilter
    foodConsumed?: FoodConsumedListRelationFilter
  }, "id" | "username" | "email" | "googleId" | "verificationToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    activeness?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isEmailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    weight?: IntNullableWithAggregatesFilter<"User"> | number | null
    height?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    activeness?: EnumActivenessNullableWithAggregatesFilter<"User"> | $Enums.Activeness | null
  }

  export type SleepWhereInput = {
    AND?: SleepWhereInput | SleepWhereInput[]
    OR?: SleepWhereInput[]
    NOT?: SleepWhereInput | SleepWhereInput[]
    id?: IntFilter<"Sleep"> | number
    userId?: IntNullableFilter<"Sleep"> | number | null
    createdAt?: DateTimeFilter<"Sleep"> | Date | string
    sleepStart?: DateTimeFilter<"Sleep"> | Date | string
    sleepEnd?: DateTimeFilter<"Sleep"> | Date | string
    sleepActual?: IntFilter<"Sleep"> | number
    target?: IntFilter<"Sleep"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type SleepOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    sleepActual?: SortOrder
    target?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SleepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SleepWhereInput | SleepWhereInput[]
    OR?: SleepWhereInput[]
    NOT?: SleepWhereInput | SleepWhereInput[]
    userId?: IntNullableFilter<"Sleep"> | number | null
    createdAt?: DateTimeFilter<"Sleep"> | Date | string
    sleepStart?: DateTimeFilter<"Sleep"> | Date | string
    sleepEnd?: DateTimeFilter<"Sleep"> | Date | string
    sleepActual?: IntFilter<"Sleep"> | number
    target?: IntFilter<"Sleep"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type SleepOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    sleepActual?: SortOrder
    target?: SortOrder
    _count?: SleepCountOrderByAggregateInput
    _avg?: SleepAvgOrderByAggregateInput
    _max?: SleepMaxOrderByAggregateInput
    _min?: SleepMinOrderByAggregateInput
    _sum?: SleepSumOrderByAggregateInput
  }

  export type SleepScalarWhereWithAggregatesInput = {
    AND?: SleepScalarWhereWithAggregatesInput | SleepScalarWhereWithAggregatesInput[]
    OR?: SleepScalarWhereWithAggregatesInput[]
    NOT?: SleepScalarWhereWithAggregatesInput | SleepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sleep"> | number
    userId?: IntNullableWithAggregatesFilter<"Sleep"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Sleep"> | Date | string
    sleepStart?: DateTimeWithAggregatesFilter<"Sleep"> | Date | string
    sleepEnd?: DateTimeWithAggregatesFilter<"Sleep"> | Date | string
    sleepActual?: IntWithAggregatesFilter<"Sleep"> | number
    target?: IntWithAggregatesFilter<"Sleep"> | number
  }

  export type StepsWhereInput = {
    AND?: StepsWhereInput | StepsWhereInput[]
    OR?: StepsWhereInput[]
    NOT?: StepsWhereInput | StepsWhereInput[]
    id?: IntFilter<"Steps"> | number
    userId?: IntNullableFilter<"Steps"> | number | null
    createdAt?: DateTimeFilter<"Steps"> | Date | string
    stepsActual?: IntFilter<"Steps"> | number
    target?: IntFilter<"Steps"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type StepsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    stepsActual?: SortOrder
    target?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StepsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StepsWhereInput | StepsWhereInput[]
    OR?: StepsWhereInput[]
    NOT?: StepsWhereInput | StepsWhereInput[]
    userId?: IntNullableFilter<"Steps"> | number | null
    createdAt?: DateTimeFilter<"Steps"> | Date | string
    stepsActual?: IntFilter<"Steps"> | number
    target?: IntFilter<"Steps"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type StepsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    stepsActual?: SortOrder
    target?: SortOrder
    _count?: StepsCountOrderByAggregateInput
    _avg?: StepsAvgOrderByAggregateInput
    _max?: StepsMaxOrderByAggregateInput
    _min?: StepsMinOrderByAggregateInput
    _sum?: StepsSumOrderByAggregateInput
  }

  export type StepsScalarWhereWithAggregatesInput = {
    AND?: StepsScalarWhereWithAggregatesInput | StepsScalarWhereWithAggregatesInput[]
    OR?: StepsScalarWhereWithAggregatesInput[]
    NOT?: StepsScalarWhereWithAggregatesInput | StepsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Steps"> | number
    userId?: IntNullableWithAggregatesFilter<"Steps"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Steps"> | Date | string
    stepsActual?: IntWithAggregatesFilter<"Steps"> | number
    target?: IntWithAggregatesFilter<"Steps"> | number
  }

  export type CaloriesWhereInput = {
    AND?: CaloriesWhereInput | CaloriesWhereInput[]
    OR?: CaloriesWhereInput[]
    NOT?: CaloriesWhereInput | CaloriesWhereInput[]
    id?: IntFilter<"Calories"> | number
    userId?: IntNullableFilter<"Calories"> | number | null
    createdAt?: DateTimeFilter<"Calories"> | Date | string
    amr?: IntFilter<"Calories"> | number
    bmi?: IntFilter<"Calories"> | number
    actual?: IntNullableFilter<"Calories"> | number | null
    target?: IntFilter<"Calories"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type CaloriesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    amr?: SortOrder
    bmi?: SortOrder
    actual?: SortOrderInput | SortOrder
    target?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CaloriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaloriesWhereInput | CaloriesWhereInput[]
    OR?: CaloriesWhereInput[]
    NOT?: CaloriesWhereInput | CaloriesWhereInput[]
    userId?: IntNullableFilter<"Calories"> | number | null
    createdAt?: DateTimeFilter<"Calories"> | Date | string
    amr?: IntFilter<"Calories"> | number
    bmi?: IntFilter<"Calories"> | number
    actual?: IntNullableFilter<"Calories"> | number | null
    target?: IntFilter<"Calories"> | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type CaloriesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    amr?: SortOrder
    bmi?: SortOrder
    actual?: SortOrderInput | SortOrder
    target?: SortOrder
    _count?: CaloriesCountOrderByAggregateInput
    _avg?: CaloriesAvgOrderByAggregateInput
    _max?: CaloriesMaxOrderByAggregateInput
    _min?: CaloriesMinOrderByAggregateInput
    _sum?: CaloriesSumOrderByAggregateInput
  }

  export type CaloriesScalarWhereWithAggregatesInput = {
    AND?: CaloriesScalarWhereWithAggregatesInput | CaloriesScalarWhereWithAggregatesInput[]
    OR?: CaloriesScalarWhereWithAggregatesInput[]
    NOT?: CaloriesScalarWhereWithAggregatesInput | CaloriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Calories"> | number
    userId?: IntNullableWithAggregatesFilter<"Calories"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Calories"> | Date | string
    amr?: IntWithAggregatesFilter<"Calories"> | number
    bmi?: IntWithAggregatesFilter<"Calories"> | number
    actual?: IntNullableWithAggregatesFilter<"Calories"> | number | null
    target?: IntWithAggregatesFilter<"Calories"> | number
  }

  export type FoodConsumedWhereInput = {
    AND?: FoodConsumedWhereInput | FoodConsumedWhereInput[]
    OR?: FoodConsumedWhereInput[]
    NOT?: FoodConsumedWhereInput | FoodConsumedWhereInput[]
    id?: IntFilter<"FoodConsumed"> | number
    userId?: IntNullableFilter<"FoodConsumed"> | number | null
    createdAt?: DateTimeFilter<"FoodConsumed"> | Date | string
    updatedAt?: DateTimeFilter<"FoodConsumed"> | Date | string
    foodName?: StringFilter<"FoodConsumed"> | string
    calories?: IntFilter<"FoodConsumed"> | number
    uniqueId?: StringFilter<"FoodConsumed"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    food?: XOR<FoodListRelationFilter, FoodListWhereInput>
  }

  export type FoodConsumedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    uniqueId?: SortOrder
    user?: UserOrderByWithRelationInput
    food?: FoodListOrderByWithRelationInput
  }

  export type FoodConsumedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodConsumedWhereInput | FoodConsumedWhereInput[]
    OR?: FoodConsumedWhereInput[]
    NOT?: FoodConsumedWhereInput | FoodConsumedWhereInput[]
    userId?: IntNullableFilter<"FoodConsumed"> | number | null
    createdAt?: DateTimeFilter<"FoodConsumed"> | Date | string
    updatedAt?: DateTimeFilter<"FoodConsumed"> | Date | string
    foodName?: StringFilter<"FoodConsumed"> | string
    calories?: IntFilter<"FoodConsumed"> | number
    uniqueId?: StringFilter<"FoodConsumed"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    food?: XOR<FoodListRelationFilter, FoodListWhereInput>
  }, "id">

  export type FoodConsumedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    uniqueId?: SortOrder
    _count?: FoodConsumedCountOrderByAggregateInput
    _avg?: FoodConsumedAvgOrderByAggregateInput
    _max?: FoodConsumedMaxOrderByAggregateInput
    _min?: FoodConsumedMinOrderByAggregateInput
    _sum?: FoodConsumedSumOrderByAggregateInput
  }

  export type FoodConsumedScalarWhereWithAggregatesInput = {
    AND?: FoodConsumedScalarWhereWithAggregatesInput | FoodConsumedScalarWhereWithAggregatesInput[]
    OR?: FoodConsumedScalarWhereWithAggregatesInput[]
    NOT?: FoodConsumedScalarWhereWithAggregatesInput | FoodConsumedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodConsumed"> | number
    userId?: IntNullableWithAggregatesFilter<"FoodConsumed"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"FoodConsumed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodConsumed"> | Date | string
    foodName?: StringWithAggregatesFilter<"FoodConsumed"> | string
    calories?: IntWithAggregatesFilter<"FoodConsumed"> | number
    uniqueId?: StringWithAggregatesFilter<"FoodConsumed"> | string
  }

  export type FoodListWhereInput = {
    AND?: FoodListWhereInput | FoodListWhereInput[]
    OR?: FoodListWhereInput[]
    NOT?: FoodListWhereInput | FoodListWhereInput[]
    id?: IntFilter<"FoodList"> | number
    foodName?: StringFilter<"FoodList"> | string
    calories?: FloatFilter<"FoodList"> | number
    foodConsumed?: FoodConsumedListRelationFilter
  }

  export type FoodListOrderByWithRelationInput = {
    id?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    foodConsumed?: FoodConsumedOrderByRelationAggregateInput
  }

  export type FoodListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    foodName?: string
    AND?: FoodListWhereInput | FoodListWhereInput[]
    OR?: FoodListWhereInput[]
    NOT?: FoodListWhereInput | FoodListWhereInput[]
    calories?: FloatFilter<"FoodList"> | number
    foodConsumed?: FoodConsumedListRelationFilter
  }, "id" | "foodName">

  export type FoodListOrderByWithAggregationInput = {
    id?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    _count?: FoodListCountOrderByAggregateInput
    _avg?: FoodListAvgOrderByAggregateInput
    _max?: FoodListMaxOrderByAggregateInput
    _min?: FoodListMinOrderByAggregateInput
    _sum?: FoodListSumOrderByAggregateInput
  }

  export type FoodListScalarWhereWithAggregatesInput = {
    AND?: FoodListScalarWhereWithAggregatesInput | FoodListScalarWhereWithAggregatesInput[]
    OR?: FoodListScalarWhereWithAggregatesInput[]
    NOT?: FoodListScalarWhereWithAggregatesInput | FoodListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodList"> | number
    foodName?: StringWithAggregatesFilter<"FoodList"> | string
    calories?: FloatWithAggregatesFilter<"FoodList"> | number
  }

  export type WaterWhereInput = {
    AND?: WaterWhereInput | WaterWhereInput[]
    OR?: WaterWhereInput[]
    NOT?: WaterWhereInput | WaterWhereInput[]
    id?: IntFilter<"Water"> | number
    userId?: IntFilter<"Water"> | number
    createdAt?: DateTimeFilter<"Water"> | Date | string
    waterActual?: IntFilter<"Water"> | number
    target?: IntFilter<"Water"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WaterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    waterActual?: SortOrder
    target?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WaterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WaterWhereInput | WaterWhereInput[]
    OR?: WaterWhereInput[]
    NOT?: WaterWhereInput | WaterWhereInput[]
    userId?: IntFilter<"Water"> | number
    createdAt?: DateTimeFilter<"Water"> | Date | string
    waterActual?: IntFilter<"Water"> | number
    target?: IntFilter<"Water"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WaterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    waterActual?: SortOrder
    target?: SortOrder
    _count?: WaterCountOrderByAggregateInput
    _avg?: WaterAvgOrderByAggregateInput
    _max?: WaterMaxOrderByAggregateInput
    _min?: WaterMinOrderByAggregateInput
    _sum?: WaterSumOrderByAggregateInput
  }

  export type WaterScalarWhereWithAggregatesInput = {
    AND?: WaterScalarWhereWithAggregatesInput | WaterScalarWhereWithAggregatesInput[]
    OR?: WaterScalarWhereWithAggregatesInput[]
    NOT?: WaterScalarWhereWithAggregatesInput | WaterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Water"> | number
    userId?: IntWithAggregatesFilter<"Water"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Water"> | Date | string
    waterActual?: IntWithAggregatesFilter<"Water"> | number
    target?: IntWithAggregatesFilter<"Water"> | number
  }

  export type MeditationWhereInput = {
    AND?: MeditationWhereInput | MeditationWhereInput[]
    OR?: MeditationWhereInput[]
    NOT?: MeditationWhereInput | MeditationWhereInput[]
    id?: IntFilter<"Meditation"> | number
    userId?: IntFilter<"Meditation"> | number
    createdAt?: DateTimeFilter<"Meditation"> | Date | string
    medicationActual?: IntFilter<"Meditation"> | number
    target?: IntFilter<"Meditation"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MeditationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    medicationActual?: SortOrder
    target?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MeditationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeditationWhereInput | MeditationWhereInput[]
    OR?: MeditationWhereInput[]
    NOT?: MeditationWhereInput | MeditationWhereInput[]
    userId?: IntFilter<"Meditation"> | number
    createdAt?: DateTimeFilter<"Meditation"> | Date | string
    medicationActual?: IntFilter<"Meditation"> | number
    target?: IntFilter<"Meditation"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MeditationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    medicationActual?: SortOrder
    target?: SortOrder
    _count?: MeditationCountOrderByAggregateInput
    _avg?: MeditationAvgOrderByAggregateInput
    _max?: MeditationMaxOrderByAggregateInput
    _min?: MeditationMinOrderByAggregateInput
    _sum?: MeditationSumOrderByAggregateInput
  }

  export type MeditationScalarWhereWithAggregatesInput = {
    AND?: MeditationScalarWhereWithAggregatesInput | MeditationScalarWhereWithAggregatesInput[]
    OR?: MeditationScalarWhereWithAggregatesInput[]
    NOT?: MeditationScalarWhereWithAggregatesInput | MeditationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meditation"> | number
    userId?: IntWithAggregatesFilter<"Meditation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Meditation"> | Date | string
    medicationActual?: IntWithAggregatesFilter<"Meditation"> | number
    target?: IntWithAggregatesFilter<"Meditation"> | number
  }

  export type MoodWhereInput = {
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    id?: IntFilter<"Mood"> | number
    userId?: IntFilter<"Mood"> | number
    createdAt?: DateTimeFilter<"Mood"> | Date | string
    currentMood?: EnumTodaymoodFilter<"Mood"> | $Enums.Todaymood
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MoodOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    currentMood?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    userId?: IntFilter<"Mood"> | number
    createdAt?: DateTimeFilter<"Mood"> | Date | string
    currentMood?: EnumTodaymoodFilter<"Mood"> | $Enums.Todaymood
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MoodOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    currentMood?: SortOrder
    _count?: MoodCountOrderByAggregateInput
    _avg?: MoodAvgOrderByAggregateInput
    _max?: MoodMaxOrderByAggregateInput
    _min?: MoodMinOrderByAggregateInput
    _sum?: MoodSumOrderByAggregateInput
  }

  export type MoodScalarWhereWithAggregatesInput = {
    AND?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    OR?: MoodScalarWhereWithAggregatesInput[]
    NOT?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mood"> | number
    userId?: IntWithAggregatesFilter<"Mood"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Mood"> | Date | string
    currentMood?: EnumTodaymoodWithAggregatesFilter<"Mood"> | $Enums.Todaymood
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    date?: DateTimeFilter<"Report"> | Date | string
    userId?: IntFilter<"Report"> | number
    sleepActual?: IntFilter<"Report"> | number
    sleepTarget?: IntFilter<"Report"> | number
    stepsActual?: IntFilter<"Report"> | number
    stepsTarget?: IntFilter<"Report"> | number
    foodCaloriesActual?: IntFilter<"Report"> | number
    foodCaloriesTarget?: IntFilter<"Report"> | number
    waterActual?: IntFilter<"Report"> | number
    waterTarget?: IntFilter<"Report"> | number
    meditationActual?: IntFilter<"Report"> | number
    meditationTarget?: IntFilter<"Report"> | number
    mood?: EnumTodaymoodFilter<"Report"> | $Enums.Todaymood
    category?: FloatNullableFilter<"Report"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    sleepTarget?: SortOrder
    stepsActual?: SortOrder
    stepsTarget?: SortOrder
    foodCaloriesActual?: SortOrder
    foodCaloriesTarget?: SortOrder
    waterActual?: SortOrder
    waterTarget?: SortOrder
    meditationActual?: SortOrder
    meditationTarget?: SortOrder
    mood?: SortOrder
    category?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    date?: DateTimeFilter<"Report"> | Date | string
    userId?: IntFilter<"Report"> | number
    sleepActual?: IntFilter<"Report"> | number
    sleepTarget?: IntFilter<"Report"> | number
    stepsActual?: IntFilter<"Report"> | number
    stepsTarget?: IntFilter<"Report"> | number
    foodCaloriesActual?: IntFilter<"Report"> | number
    foodCaloriesTarget?: IntFilter<"Report"> | number
    waterActual?: IntFilter<"Report"> | number
    waterTarget?: IntFilter<"Report"> | number
    meditationActual?: IntFilter<"Report"> | number
    meditationTarget?: IntFilter<"Report"> | number
    mood?: EnumTodaymoodFilter<"Report"> | $Enums.Todaymood
    category?: FloatNullableFilter<"Report"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    sleepTarget?: SortOrder
    stepsActual?: SortOrder
    stepsTarget?: SortOrder
    foodCaloriesActual?: SortOrder
    foodCaloriesTarget?: SortOrder
    waterActual?: SortOrder
    waterTarget?: SortOrder
    meditationActual?: SortOrder
    meditationTarget?: SortOrder
    mood?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    date?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    userId?: IntWithAggregatesFilter<"Report"> | number
    sleepActual?: IntWithAggregatesFilter<"Report"> | number
    sleepTarget?: IntWithAggregatesFilter<"Report"> | number
    stepsActual?: IntWithAggregatesFilter<"Report"> | number
    stepsTarget?: IntWithAggregatesFilter<"Report"> | number
    foodCaloriesActual?: IntWithAggregatesFilter<"Report"> | number
    foodCaloriesTarget?: IntWithAggregatesFilter<"Report"> | number
    waterActual?: IntWithAggregatesFilter<"Report"> | number
    waterTarget?: IntWithAggregatesFilter<"Report"> | number
    meditationActual?: IntWithAggregatesFilter<"Report"> | number
    meditationTarget?: IntWithAggregatesFilter<"Report"> | number
    mood?: EnumTodaymoodWithAggregatesFilter<"Report"> | $Enums.Todaymood
    category?: FloatNullableWithAggregatesFilter<"Report"> | number | null
  }

  export type UserCreateInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    steps?: StepsCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    steps?: StepsUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
  }

  export type SleepCreateInput = {
    createdAt?: Date | string
    sleepStart?: Date | string
    sleepEnd: Date | string
    sleepActual: number
    target: number
    user?: UserCreateNestedOneWithoutSleepInput
  }

  export type SleepUncheckedCreateInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    sleepStart?: Date | string
    sleepEnd: Date | string
    sleepActual: number
    target: number
  }

  export type SleepUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutSleepNestedInput
  }

  export type SleepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type SleepCreateManyInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    sleepStart?: Date | string
    sleepEnd: Date | string
    sleepActual: number
    target: number
  }

  export type SleepUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type SleepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type StepsCreateInput = {
    createdAt?: Date | string
    stepsActual: number
    target: number
    user?: UserCreateNestedOneWithoutStepsInput
  }

  export type StepsUncheckedCreateInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    stepsActual: number
    target: number
  }

  export type StepsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepsActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutStepsNestedInput
  }

  export type StepsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepsActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type StepsCreateManyInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    stepsActual: number
    target: number
  }

  export type StepsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepsActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type StepsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepsActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CaloriesCreateInput = {
    createdAt?: Date | string
    amr: number
    bmi: number
    actual?: number | null
    target: number
    user?: UserCreateNestedOneWithoutFoodInput
  }

  export type CaloriesUncheckedCreateInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    amr: number
    bmi: number
    actual?: number | null
    target: number
  }

  export type CaloriesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amr?: IntFieldUpdateOperationsInput | number
    bmi?: IntFieldUpdateOperationsInput | number
    actual?: NullableIntFieldUpdateOperationsInput | number | null
    target?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutFoodNestedInput
  }

  export type CaloriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amr?: IntFieldUpdateOperationsInput | number
    bmi?: IntFieldUpdateOperationsInput | number
    actual?: NullableIntFieldUpdateOperationsInput | number | null
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CaloriesCreateManyInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    amr: number
    bmi: number
    actual?: number | null
    target: number
  }

  export type CaloriesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amr?: IntFieldUpdateOperationsInput | number
    bmi?: IntFieldUpdateOperationsInput | number
    actual?: NullableIntFieldUpdateOperationsInput | number | null
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CaloriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amr?: IntFieldUpdateOperationsInput | number
    bmi?: IntFieldUpdateOperationsInput | number
    actual?: NullableIntFieldUpdateOperationsInput | number | null
    target?: IntFieldUpdateOperationsInput | number
  }

  export type FoodConsumedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    calories: number
    uniqueId: string
    user?: UserCreateNestedOneWithoutFoodConsumedInput
    food: FoodListCreateNestedOneWithoutFoodConsumedInput
  }

  export type FoodConsumedUncheckedCreateInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodName: string
    calories: number
    uniqueId: string
  }

  export type FoodConsumedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutFoodConsumedNestedInput
    food?: FoodListUpdateOneRequiredWithoutFoodConsumedNestedInput
  }

  export type FoodConsumedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodConsumedCreateManyInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodName: string
    calories: number
    uniqueId: string
  }

  export type FoodConsumedUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodConsumedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodListCreateInput = {
    foodName: string
    calories: number
    foodConsumed?: FoodConsumedCreateNestedManyWithoutFoodInput
  }

  export type FoodListUncheckedCreateInput = {
    id?: number
    foodName: string
    calories: number
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodListUpdateInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    foodConsumed?: FoodConsumedUpdateManyWithoutFoodNestedInput
  }

  export type FoodListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodListCreateManyInput = {
    id?: number
    foodName: string
    calories: number
  }

  export type FoodListUpdateManyMutationInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
  }

  export type FoodListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
  }

  export type WaterCreateInput = {
    createdAt?: Date | string
    waterActual: number
    target: number
    user: UserCreateNestedOneWithoutWaterInput
  }

  export type WaterUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    waterActual: number
    target: number
  }

  export type WaterUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWaterNestedInput
  }

  export type WaterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type WaterCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    waterActual: number
    target: number
  }

  export type WaterUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MeditationCreateInput = {
    createdAt?: Date | string
    medicationActual: number
    target: number
    user: UserCreateNestedOneWithoutMeditationInput
  }

  export type MeditationUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    medicationActual: number
    target: number
  }

  export type MeditationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMeditationNestedInput
  }

  export type MeditationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MeditationCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    medicationActual: number
    target: number
  }

  export type MeditationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MeditationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MoodCreateInput = {
    createdAt?: Date | string
    currentMood: $Enums.Todaymood
    user: UserCreateNestedOneWithoutMoodInput
  }

  export type MoodUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    currentMood: $Enums.Todaymood
  }

  export type MoodUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentMood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    user?: UserUpdateOneRequiredWithoutMoodNestedInput
  }

  export type MoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentMood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
  }

  export type MoodCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    currentMood: $Enums.Todaymood
  }

  export type MoodUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentMood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
  }

  export type MoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentMood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
  }

  export type ReportCreateInput = {
    date?: Date | string
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: $Enums.Todaymood
    category?: number | null
    user: UserCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    date?: Date | string
    userId: number
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: $Enums.Todaymood
    category?: number | null
  }

  export type ReportUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    sleepTarget?: IntFieldUpdateOperationsInput | number
    stepsActual?: IntFieldUpdateOperationsInput | number
    stepsTarget?: IntFieldUpdateOperationsInput | number
    foodCaloriesActual?: IntFieldUpdateOperationsInput | number
    foodCaloriesTarget?: IntFieldUpdateOperationsInput | number
    waterActual?: IntFieldUpdateOperationsInput | number
    waterTarget?: IntFieldUpdateOperationsInput | number
    meditationActual?: IntFieldUpdateOperationsInput | number
    meditationTarget?: IntFieldUpdateOperationsInput | number
    mood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    category?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sleepActual?: IntFieldUpdateOperationsInput | number
    sleepTarget?: IntFieldUpdateOperationsInput | number
    stepsActual?: IntFieldUpdateOperationsInput | number
    stepsTarget?: IntFieldUpdateOperationsInput | number
    foodCaloriesActual?: IntFieldUpdateOperationsInput | number
    foodCaloriesTarget?: IntFieldUpdateOperationsInput | number
    waterActual?: IntFieldUpdateOperationsInput | number
    waterTarget?: IntFieldUpdateOperationsInput | number
    meditationActual?: IntFieldUpdateOperationsInput | number
    meditationTarget?: IntFieldUpdateOperationsInput | number
    mood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    category?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReportCreateManyInput = {
    id?: number
    date?: Date | string
    userId: number
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: $Enums.Todaymood
    category?: number | null
  }

  export type ReportUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    sleepTarget?: IntFieldUpdateOperationsInput | number
    stepsActual?: IntFieldUpdateOperationsInput | number
    stepsTarget?: IntFieldUpdateOperationsInput | number
    foodCaloriesActual?: IntFieldUpdateOperationsInput | number
    foodCaloriesTarget?: IntFieldUpdateOperationsInput | number
    waterActual?: IntFieldUpdateOperationsInput | number
    waterTarget?: IntFieldUpdateOperationsInput | number
    meditationActual?: IntFieldUpdateOperationsInput | number
    meditationTarget?: IntFieldUpdateOperationsInput | number
    mood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    category?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sleepActual?: IntFieldUpdateOperationsInput | number
    sleepTarget?: IntFieldUpdateOperationsInput | number
    stepsActual?: IntFieldUpdateOperationsInput | number
    stepsTarget?: IntFieldUpdateOperationsInput | number
    foodCaloriesActual?: IntFieldUpdateOperationsInput | number
    foodCaloriesTarget?: IntFieldUpdateOperationsInput | number
    waterActual?: IntFieldUpdateOperationsInput | number
    waterTarget?: IntFieldUpdateOperationsInput | number
    meditationActual?: IntFieldUpdateOperationsInput | number
    meditationTarget?: IntFieldUpdateOperationsInput | number
    mood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    category?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumActivenessNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Activeness | EnumActivenessFieldRefInput<$PrismaModel> | null
    in?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivenessNullableFilter<$PrismaModel> | $Enums.Activeness | null
  }

  export type SleepListRelationFilter = {
    every?: SleepWhereInput
    some?: SleepWhereInput
    none?: SleepWhereInput
  }

  export type StepsListRelationFilter = {
    every?: StepsWhereInput
    some?: StepsWhereInput
    none?: StepsWhereInput
  }

  export type CaloriesListRelationFilter = {
    every?: CaloriesWhereInput
    some?: CaloriesWhereInput
    none?: CaloriesWhereInput
  }

  export type WaterListRelationFilter = {
    every?: WaterWhereInput
    some?: WaterWhereInput
    none?: WaterWhereInput
  }

  export type MeditationListRelationFilter = {
    every?: MeditationWhereInput
    some?: MeditationWhereInput
    none?: MeditationWhereInput
  }

  export type MoodListRelationFilter = {
    every?: MoodWhereInput
    some?: MoodWhereInput
    none?: MoodWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type FoodConsumedListRelationFilter = {
    every?: FoodConsumedWhereInput
    some?: FoodConsumedWhereInput
    none?: FoodConsumedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SleepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaloriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeditationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodConsumedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    activeness?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    activeness?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    isEmailVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    activeness?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumActivenessNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Activeness | EnumActivenessFieldRefInput<$PrismaModel> | null
    in?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivenessNullableWithAggregatesFilter<$PrismaModel> | $Enums.Activeness | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivenessNullableFilter<$PrismaModel>
    _max?: NestedEnumActivenessNullableFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SleepCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    sleepActual?: SortOrder
    target?: SortOrder
  }

  export type SleepAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    target?: SortOrder
  }

  export type SleepMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    sleepActual?: SortOrder
    target?: SortOrder
  }

  export type SleepMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    sleepStart?: SortOrder
    sleepEnd?: SortOrder
    sleepActual?: SortOrder
    target?: SortOrder
  }

  export type SleepSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    target?: SortOrder
  }

  export type StepsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    stepsActual?: SortOrder
    target?: SortOrder
  }

  export type StepsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stepsActual?: SortOrder
    target?: SortOrder
  }

  export type StepsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    stepsActual?: SortOrder
    target?: SortOrder
  }

  export type StepsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    stepsActual?: SortOrder
    target?: SortOrder
  }

  export type StepsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stepsActual?: SortOrder
    target?: SortOrder
  }

  export type CaloriesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    amr?: SortOrder
    bmi?: SortOrder
    actual?: SortOrder
    target?: SortOrder
  }

  export type CaloriesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amr?: SortOrder
    bmi?: SortOrder
    actual?: SortOrder
    target?: SortOrder
  }

  export type CaloriesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    amr?: SortOrder
    bmi?: SortOrder
    actual?: SortOrder
    target?: SortOrder
  }

  export type CaloriesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    amr?: SortOrder
    bmi?: SortOrder
    actual?: SortOrder
    target?: SortOrder
  }

  export type CaloriesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amr?: SortOrder
    bmi?: SortOrder
    actual?: SortOrder
    target?: SortOrder
  }

  export type FoodListRelationFilter = {
    is?: FoodListWhereInput
    isNot?: FoodListWhereInput
  }

  export type FoodConsumedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    uniqueId?: SortOrder
  }

  export type FoodConsumedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
  }

  export type FoodConsumedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    uniqueId?: SortOrder
  }

  export type FoodConsumedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    uniqueId?: SortOrder
  }

  export type FoodConsumedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FoodListCountOrderByAggregateInput = {
    id?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
  }

  export type FoodListAvgOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
  }

  export type FoodListMaxOrderByAggregateInput = {
    id?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
  }

  export type FoodListMinOrderByAggregateInput = {
    id?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
  }

  export type FoodListSumOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WaterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    waterActual?: SortOrder
    target?: SortOrder
  }

  export type WaterAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    waterActual?: SortOrder
    target?: SortOrder
  }

  export type WaterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    waterActual?: SortOrder
    target?: SortOrder
  }

  export type WaterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    waterActual?: SortOrder
    target?: SortOrder
  }

  export type WaterSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    waterActual?: SortOrder
    target?: SortOrder
  }

  export type MeditationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    medicationActual?: SortOrder
    target?: SortOrder
  }

  export type MeditationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicationActual?: SortOrder
    target?: SortOrder
  }

  export type MeditationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    medicationActual?: SortOrder
    target?: SortOrder
  }

  export type MeditationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    medicationActual?: SortOrder
    target?: SortOrder
  }

  export type MeditationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    medicationActual?: SortOrder
    target?: SortOrder
  }

  export type EnumTodaymoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Todaymood | EnumTodaymoodFieldRefInput<$PrismaModel>
    in?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    not?: NestedEnumTodaymoodFilter<$PrismaModel> | $Enums.Todaymood
  }

  export type MoodCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    currentMood?: SortOrder
  }

  export type MoodAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MoodMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    currentMood?: SortOrder
  }

  export type MoodMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    currentMood?: SortOrder
  }

  export type MoodSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTodaymoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Todaymood | EnumTodaymoodFieldRefInput<$PrismaModel>
    in?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    not?: NestedEnumTodaymoodWithAggregatesFilter<$PrismaModel> | $Enums.Todaymood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodaymoodFilter<$PrismaModel>
    _max?: NestedEnumTodaymoodFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    sleepTarget?: SortOrder
    stepsActual?: SortOrder
    stepsTarget?: SortOrder
    foodCaloriesActual?: SortOrder
    foodCaloriesTarget?: SortOrder
    waterActual?: SortOrder
    waterTarget?: SortOrder
    meditationActual?: SortOrder
    meditationTarget?: SortOrder
    mood?: SortOrder
    category?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    sleepTarget?: SortOrder
    stepsActual?: SortOrder
    stepsTarget?: SortOrder
    foodCaloriesActual?: SortOrder
    foodCaloriesTarget?: SortOrder
    waterActual?: SortOrder
    waterTarget?: SortOrder
    meditationActual?: SortOrder
    meditationTarget?: SortOrder
    category?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    sleepTarget?: SortOrder
    stepsActual?: SortOrder
    stepsTarget?: SortOrder
    foodCaloriesActual?: SortOrder
    foodCaloriesTarget?: SortOrder
    waterActual?: SortOrder
    waterTarget?: SortOrder
    meditationActual?: SortOrder
    meditationTarget?: SortOrder
    mood?: SortOrder
    category?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    sleepTarget?: SortOrder
    stepsActual?: SortOrder
    stepsTarget?: SortOrder
    foodCaloriesActual?: SortOrder
    foodCaloriesTarget?: SortOrder
    waterActual?: SortOrder
    waterTarget?: SortOrder
    meditationActual?: SortOrder
    meditationTarget?: SortOrder
    mood?: SortOrder
    category?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sleepActual?: SortOrder
    sleepTarget?: SortOrder
    stepsActual?: SortOrder
    stepsTarget?: SortOrder
    foodCaloriesActual?: SortOrder
    foodCaloriesTarget?: SortOrder
    waterActual?: SortOrder
    waterTarget?: SortOrder
    meditationActual?: SortOrder
    meditationTarget?: SortOrder
    category?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SleepCreateNestedManyWithoutUserInput = {
    create?: XOR<SleepCreateWithoutUserInput, SleepUncheckedCreateWithoutUserInput> | SleepCreateWithoutUserInput[] | SleepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepCreateOrConnectWithoutUserInput | SleepCreateOrConnectWithoutUserInput[]
    createMany?: SleepCreateManyUserInputEnvelope
    connect?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
  }

  export type StepsCreateNestedManyWithoutUserInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
  }

  export type CaloriesCreateNestedManyWithoutUserInput = {
    create?: XOR<CaloriesCreateWithoutUserInput, CaloriesUncheckedCreateWithoutUserInput> | CaloriesCreateWithoutUserInput[] | CaloriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesCreateOrConnectWithoutUserInput | CaloriesCreateOrConnectWithoutUserInput[]
    createMany?: CaloriesCreateManyUserInputEnvelope
    connect?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
  }

  export type WaterCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterCreateWithoutUserInput, WaterUncheckedCreateWithoutUserInput> | WaterCreateWithoutUserInput[] | WaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutUserInput | WaterCreateOrConnectWithoutUserInput[]
    createMany?: WaterCreateManyUserInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type MeditationCreateNestedManyWithoutUserInput = {
    create?: XOR<MeditationCreateWithoutUserInput, MeditationUncheckedCreateWithoutUserInput> | MeditationCreateWithoutUserInput[] | MeditationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationCreateOrConnectWithoutUserInput | MeditationCreateOrConnectWithoutUserInput[]
    createMany?: MeditationCreateManyUserInputEnvelope
    connect?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
  }

  export type MoodCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type FoodConsumedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodConsumedCreateWithoutUserInput, FoodConsumedUncheckedCreateWithoutUserInput> | FoodConsumedCreateWithoutUserInput[] | FoodConsumedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutUserInput | FoodConsumedCreateOrConnectWithoutUserInput[]
    createMany?: FoodConsumedCreateManyUserInputEnvelope
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
  }

  export type SleepUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SleepCreateWithoutUserInput, SleepUncheckedCreateWithoutUserInput> | SleepCreateWithoutUserInput[] | SleepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepCreateOrConnectWithoutUserInput | SleepCreateOrConnectWithoutUserInput[]
    createMany?: SleepCreateManyUserInputEnvelope
    connect?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
  }

  export type StepsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
  }

  export type CaloriesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CaloriesCreateWithoutUserInput, CaloriesUncheckedCreateWithoutUserInput> | CaloriesCreateWithoutUserInput[] | CaloriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesCreateOrConnectWithoutUserInput | CaloriesCreateOrConnectWithoutUserInput[]
    createMany?: CaloriesCreateManyUserInputEnvelope
    connect?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
  }

  export type WaterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterCreateWithoutUserInput, WaterUncheckedCreateWithoutUserInput> | WaterCreateWithoutUserInput[] | WaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutUserInput | WaterCreateOrConnectWithoutUserInput[]
    createMany?: WaterCreateManyUserInputEnvelope
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
  }

  export type MeditationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeditationCreateWithoutUserInput, MeditationUncheckedCreateWithoutUserInput> | MeditationCreateWithoutUserInput[] | MeditationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationCreateOrConnectWithoutUserInput | MeditationCreateOrConnectWithoutUserInput[]
    createMany?: MeditationCreateManyUserInputEnvelope
    connect?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
  }

  export type MoodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type FoodConsumedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodConsumedCreateWithoutUserInput, FoodConsumedUncheckedCreateWithoutUserInput> | FoodConsumedCreateWithoutUserInput[] | FoodConsumedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutUserInput | FoodConsumedCreateOrConnectWithoutUserInput[]
    createMany?: FoodConsumedCreateManyUserInputEnvelope
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableEnumActivenessFieldUpdateOperationsInput = {
    set?: $Enums.Activeness | null
  }

  export type SleepUpdateManyWithoutUserNestedInput = {
    create?: XOR<SleepCreateWithoutUserInput, SleepUncheckedCreateWithoutUserInput> | SleepCreateWithoutUserInput[] | SleepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepCreateOrConnectWithoutUserInput | SleepCreateOrConnectWithoutUserInput[]
    upsert?: SleepUpsertWithWhereUniqueWithoutUserInput | SleepUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SleepCreateManyUserInputEnvelope
    set?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    disconnect?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    delete?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    connect?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    update?: SleepUpdateWithWhereUniqueWithoutUserInput | SleepUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SleepUpdateManyWithWhereWithoutUserInput | SleepUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SleepScalarWhereInput | SleepScalarWhereInput[]
  }

  export type StepsUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    upsert?: StepsUpsertWithWhereUniqueWithoutUserInput | StepsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    set?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    disconnect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    delete?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    update?: StepsUpdateWithWhereUniqueWithoutUserInput | StepsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepsUpdateManyWithWhereWithoutUserInput | StepsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepsScalarWhereInput | StepsScalarWhereInput[]
  }

  export type CaloriesUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaloriesCreateWithoutUserInput, CaloriesUncheckedCreateWithoutUserInput> | CaloriesCreateWithoutUserInput[] | CaloriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesCreateOrConnectWithoutUserInput | CaloriesCreateOrConnectWithoutUserInput[]
    upsert?: CaloriesUpsertWithWhereUniqueWithoutUserInput | CaloriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaloriesCreateManyUserInputEnvelope
    set?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    disconnect?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    delete?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    connect?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    update?: CaloriesUpdateWithWhereUniqueWithoutUserInput | CaloriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaloriesUpdateManyWithWhereWithoutUserInput | CaloriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaloriesScalarWhereInput | CaloriesScalarWhereInput[]
  }

  export type WaterUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterCreateWithoutUserInput, WaterUncheckedCreateWithoutUserInput> | WaterCreateWithoutUserInput[] | WaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutUserInput | WaterCreateOrConnectWithoutUserInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutUserInput | WaterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterCreateManyUserInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutUserInput | WaterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutUserInput | WaterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type MeditationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeditationCreateWithoutUserInput, MeditationUncheckedCreateWithoutUserInput> | MeditationCreateWithoutUserInput[] | MeditationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationCreateOrConnectWithoutUserInput | MeditationCreateOrConnectWithoutUserInput[]
    upsert?: MeditationUpsertWithWhereUniqueWithoutUserInput | MeditationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeditationCreateManyUserInputEnvelope
    set?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    disconnect?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    delete?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    connect?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    update?: MeditationUpdateWithWhereUniqueWithoutUserInput | MeditationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeditationUpdateManyWithWhereWithoutUserInput | MeditationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeditationScalarWhereInput | MeditationScalarWhereInput[]
  }

  export type MoodUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    upsert?: MoodUpsertWithWhereUniqueWithoutUserInput | MoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    set?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    disconnect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    delete?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    update?: MoodUpdateWithWhereUniqueWithoutUserInput | MoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodUpdateManyWithWhereWithoutUserInput | MoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodScalarWhereInput | MoodScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type FoodConsumedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodConsumedCreateWithoutUserInput, FoodConsumedUncheckedCreateWithoutUserInput> | FoodConsumedCreateWithoutUserInput[] | FoodConsumedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutUserInput | FoodConsumedCreateOrConnectWithoutUserInput[]
    upsert?: FoodConsumedUpsertWithWhereUniqueWithoutUserInput | FoodConsumedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodConsumedCreateManyUserInputEnvelope
    set?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    disconnect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    delete?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    update?: FoodConsumedUpdateWithWhereUniqueWithoutUserInput | FoodConsumedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodConsumedUpdateManyWithWhereWithoutUserInput | FoodConsumedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodConsumedScalarWhereInput | FoodConsumedScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SleepUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SleepCreateWithoutUserInput, SleepUncheckedCreateWithoutUserInput> | SleepCreateWithoutUserInput[] | SleepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepCreateOrConnectWithoutUserInput | SleepCreateOrConnectWithoutUserInput[]
    upsert?: SleepUpsertWithWhereUniqueWithoutUserInput | SleepUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SleepCreateManyUserInputEnvelope
    set?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    disconnect?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    delete?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    connect?: SleepWhereUniqueInput | SleepWhereUniqueInput[]
    update?: SleepUpdateWithWhereUniqueWithoutUserInput | SleepUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SleepUpdateManyWithWhereWithoutUserInput | SleepUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SleepScalarWhereInput | SleepScalarWhereInput[]
  }

  export type StepsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    upsert?: StepsUpsertWithWhereUniqueWithoutUserInput | StepsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    set?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    disconnect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    delete?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    update?: StepsUpdateWithWhereUniqueWithoutUserInput | StepsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepsUpdateManyWithWhereWithoutUserInput | StepsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepsScalarWhereInput | StepsScalarWhereInput[]
  }

  export type CaloriesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaloriesCreateWithoutUserInput, CaloriesUncheckedCreateWithoutUserInput> | CaloriesCreateWithoutUserInput[] | CaloriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesCreateOrConnectWithoutUserInput | CaloriesCreateOrConnectWithoutUserInput[]
    upsert?: CaloriesUpsertWithWhereUniqueWithoutUserInput | CaloriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaloriesCreateManyUserInputEnvelope
    set?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    disconnect?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    delete?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    connect?: CaloriesWhereUniqueInput | CaloriesWhereUniqueInput[]
    update?: CaloriesUpdateWithWhereUniqueWithoutUserInput | CaloriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaloriesUpdateManyWithWhereWithoutUserInput | CaloriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaloriesScalarWhereInput | CaloriesScalarWhereInput[]
  }

  export type WaterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterCreateWithoutUserInput, WaterUncheckedCreateWithoutUserInput> | WaterCreateWithoutUserInput[] | WaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterCreateOrConnectWithoutUserInput | WaterCreateOrConnectWithoutUserInput[]
    upsert?: WaterUpsertWithWhereUniqueWithoutUserInput | WaterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterCreateManyUserInputEnvelope
    set?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    disconnect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    delete?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    connect?: WaterWhereUniqueInput | WaterWhereUniqueInput[]
    update?: WaterUpdateWithWhereUniqueWithoutUserInput | WaterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterUpdateManyWithWhereWithoutUserInput | WaterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterScalarWhereInput | WaterScalarWhereInput[]
  }

  export type MeditationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeditationCreateWithoutUserInput, MeditationUncheckedCreateWithoutUserInput> | MeditationCreateWithoutUserInput[] | MeditationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeditationCreateOrConnectWithoutUserInput | MeditationCreateOrConnectWithoutUserInput[]
    upsert?: MeditationUpsertWithWhereUniqueWithoutUserInput | MeditationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeditationCreateManyUserInputEnvelope
    set?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    disconnect?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    delete?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    connect?: MeditationWhereUniqueInput | MeditationWhereUniqueInput[]
    update?: MeditationUpdateWithWhereUniqueWithoutUserInput | MeditationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeditationUpdateManyWithWhereWithoutUserInput | MeditationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeditationScalarWhereInput | MeditationScalarWhereInput[]
  }

  export type MoodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput> | MoodCreateWithoutUserInput[] | MoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutUserInput | MoodCreateOrConnectWithoutUserInput[]
    upsert?: MoodUpsertWithWhereUniqueWithoutUserInput | MoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodCreateManyUserInputEnvelope
    set?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    disconnect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    delete?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    update?: MoodUpdateWithWhereUniqueWithoutUserInput | MoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodUpdateManyWithWhereWithoutUserInput | MoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodScalarWhereInput | MoodScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type FoodConsumedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodConsumedCreateWithoutUserInput, FoodConsumedUncheckedCreateWithoutUserInput> | FoodConsumedCreateWithoutUserInput[] | FoodConsumedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutUserInput | FoodConsumedCreateOrConnectWithoutUserInput[]
    upsert?: FoodConsumedUpsertWithWhereUniqueWithoutUserInput | FoodConsumedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodConsumedCreateManyUserInputEnvelope
    set?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    disconnect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    delete?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    update?: FoodConsumedUpdateWithWhereUniqueWithoutUserInput | FoodConsumedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodConsumedUpdateManyWithWhereWithoutUserInput | FoodConsumedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodConsumedScalarWhereInput | FoodConsumedScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSleepInput = {
    create?: XOR<UserCreateWithoutSleepInput, UserUncheckedCreateWithoutSleepInput>
    connectOrCreate?: UserCreateOrConnectWithoutSleepInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSleepNestedInput = {
    create?: XOR<UserCreateWithoutSleepInput, UserUncheckedCreateWithoutSleepInput>
    connectOrCreate?: UserCreateOrConnectWithoutSleepInput
    upsert?: UserUpsertWithoutSleepInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSleepInput, UserUpdateWithoutSleepInput>, UserUncheckedUpdateWithoutSleepInput>
  }

  export type UserCreateNestedOneWithoutStepsInput = {
    create?: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutStepsNestedInput = {
    create?: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepsInput
    upsert?: UserUpsertWithoutStepsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStepsInput, UserUpdateWithoutStepsInput>, UserUncheckedUpdateWithoutStepsInput>
  }

  export type UserCreateNestedOneWithoutFoodInput = {
    create?: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutFoodNestedInput = {
    create?: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodInput
    upsert?: UserUpsertWithoutFoodInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoodInput, UserUpdateWithoutFoodInput>, UserUncheckedUpdateWithoutFoodInput>
  }

  export type UserCreateNestedOneWithoutFoodConsumedInput = {
    create?: XOR<UserCreateWithoutFoodConsumedInput, UserUncheckedCreateWithoutFoodConsumedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodConsumedInput
    connect?: UserWhereUniqueInput
  }

  export type FoodListCreateNestedOneWithoutFoodConsumedInput = {
    create?: XOR<FoodListCreateWithoutFoodConsumedInput, FoodListUncheckedCreateWithoutFoodConsumedInput>
    connectOrCreate?: FoodListCreateOrConnectWithoutFoodConsumedInput
    connect?: FoodListWhereUniqueInput
  }

  export type UserUpdateOneWithoutFoodConsumedNestedInput = {
    create?: XOR<UserCreateWithoutFoodConsumedInput, UserUncheckedCreateWithoutFoodConsumedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodConsumedInput
    upsert?: UserUpsertWithoutFoodConsumedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoodConsumedInput, UserUpdateWithoutFoodConsumedInput>, UserUncheckedUpdateWithoutFoodConsumedInput>
  }

  export type FoodListUpdateOneRequiredWithoutFoodConsumedNestedInput = {
    create?: XOR<FoodListCreateWithoutFoodConsumedInput, FoodListUncheckedCreateWithoutFoodConsumedInput>
    connectOrCreate?: FoodListCreateOrConnectWithoutFoodConsumedInput
    upsert?: FoodListUpsertWithoutFoodConsumedInput
    connect?: FoodListWhereUniqueInput
    update?: XOR<XOR<FoodListUpdateToOneWithWhereWithoutFoodConsumedInput, FoodListUpdateWithoutFoodConsumedInput>, FoodListUncheckedUpdateWithoutFoodConsumedInput>
  }

  export type FoodConsumedCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodConsumedCreateWithoutFoodInput, FoodConsumedUncheckedCreateWithoutFoodInput> | FoodConsumedCreateWithoutFoodInput[] | FoodConsumedUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutFoodInput | FoodConsumedCreateOrConnectWithoutFoodInput[]
    createMany?: FoodConsumedCreateManyFoodInputEnvelope
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
  }

  export type FoodConsumedUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodConsumedCreateWithoutFoodInput, FoodConsumedUncheckedCreateWithoutFoodInput> | FoodConsumedCreateWithoutFoodInput[] | FoodConsumedUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutFoodInput | FoodConsumedCreateOrConnectWithoutFoodInput[]
    createMany?: FoodConsumedCreateManyFoodInputEnvelope
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodConsumedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodConsumedCreateWithoutFoodInput, FoodConsumedUncheckedCreateWithoutFoodInput> | FoodConsumedCreateWithoutFoodInput[] | FoodConsumedUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutFoodInput | FoodConsumedCreateOrConnectWithoutFoodInput[]
    upsert?: FoodConsumedUpsertWithWhereUniqueWithoutFoodInput | FoodConsumedUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodConsumedCreateManyFoodInputEnvelope
    set?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    disconnect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    delete?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    update?: FoodConsumedUpdateWithWhereUniqueWithoutFoodInput | FoodConsumedUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodConsumedUpdateManyWithWhereWithoutFoodInput | FoodConsumedUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodConsumedScalarWhereInput | FoodConsumedScalarWhereInput[]
  }

  export type FoodConsumedUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodConsumedCreateWithoutFoodInput, FoodConsumedUncheckedCreateWithoutFoodInput> | FoodConsumedCreateWithoutFoodInput[] | FoodConsumedUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodConsumedCreateOrConnectWithoutFoodInput | FoodConsumedCreateOrConnectWithoutFoodInput[]
    upsert?: FoodConsumedUpsertWithWhereUniqueWithoutFoodInput | FoodConsumedUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodConsumedCreateManyFoodInputEnvelope
    set?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    disconnect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    delete?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    connect?: FoodConsumedWhereUniqueInput | FoodConsumedWhereUniqueInput[]
    update?: FoodConsumedUpdateWithWhereUniqueWithoutFoodInput | FoodConsumedUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodConsumedUpdateManyWithWhereWithoutFoodInput | FoodConsumedUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodConsumedScalarWhereInput | FoodConsumedScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWaterInput = {
    create?: XOR<UserCreateWithoutWaterInput, UserUncheckedCreateWithoutWaterInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaterInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWaterNestedInput = {
    create?: XOR<UserCreateWithoutWaterInput, UserUncheckedCreateWithoutWaterInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaterInput
    upsert?: UserUpsertWithoutWaterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWaterInput, UserUpdateWithoutWaterInput>, UserUncheckedUpdateWithoutWaterInput>
  }

  export type UserCreateNestedOneWithoutMeditationInput = {
    create?: XOR<UserCreateWithoutMeditationInput, UserUncheckedCreateWithoutMeditationInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeditationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMeditationNestedInput = {
    create?: XOR<UserCreateWithoutMeditationInput, UserUncheckedCreateWithoutMeditationInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeditationInput
    upsert?: UserUpsertWithoutMeditationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeditationInput, UserUpdateWithoutMeditationInput>, UserUncheckedUpdateWithoutMeditationInput>
  }

  export type UserCreateNestedOneWithoutMoodInput = {
    create?: XOR<UserCreateWithoutMoodInput, UserUncheckedCreateWithoutMoodInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTodaymoodFieldUpdateOperationsInput = {
    set?: $Enums.Todaymood
  }

  export type UserUpdateOneRequiredWithoutMoodNestedInput = {
    create?: XOR<UserCreateWithoutMoodInput, UserUncheckedCreateWithoutMoodInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodInput
    upsert?: UserUpsertWithoutMoodInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoodInput, UserUpdateWithoutMoodInput>, UserUncheckedUpdateWithoutMoodInput>
  }

  export type UserCreateNestedOneWithoutReportInput = {
    create?: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportInput
    upsert?: UserUpsertWithoutReportInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportInput, UserUpdateWithoutReportInput>, UserUncheckedUpdateWithoutReportInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumActivenessNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Activeness | EnumActivenessFieldRefInput<$PrismaModel> | null
    in?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivenessNullableFilter<$PrismaModel> | $Enums.Activeness | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivenessNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Activeness | EnumActivenessFieldRefInput<$PrismaModel> | null
    in?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Activeness[] | ListEnumActivenessFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivenessNullableWithAggregatesFilter<$PrismaModel> | $Enums.Activeness | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivenessNullableFilter<$PrismaModel>
    _max?: NestedEnumActivenessNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTodaymoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Todaymood | EnumTodaymoodFieldRefInput<$PrismaModel>
    in?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    not?: NestedEnumTodaymoodFilter<$PrismaModel> | $Enums.Todaymood
  }

  export type NestedEnumTodaymoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Todaymood | EnumTodaymoodFieldRefInput<$PrismaModel>
    in?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Todaymood[] | ListEnumTodaymoodFieldRefInput<$PrismaModel>
    not?: NestedEnumTodaymoodWithAggregatesFilter<$PrismaModel> | $Enums.Todaymood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodaymoodFilter<$PrismaModel>
    _max?: NestedEnumTodaymoodFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SleepCreateWithoutUserInput = {
    createdAt?: Date | string
    sleepStart?: Date | string
    sleepEnd: Date | string
    sleepActual: number
    target: number
  }

  export type SleepUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    sleepStart?: Date | string
    sleepEnd: Date | string
    sleepActual: number
    target: number
  }

  export type SleepCreateOrConnectWithoutUserInput = {
    where: SleepWhereUniqueInput
    create: XOR<SleepCreateWithoutUserInput, SleepUncheckedCreateWithoutUserInput>
  }

  export type SleepCreateManyUserInputEnvelope = {
    data: SleepCreateManyUserInput | SleepCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StepsCreateWithoutUserInput = {
    createdAt?: Date | string
    stepsActual: number
    target: number
  }

  export type StepsUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    stepsActual: number
    target: number
  }

  export type StepsCreateOrConnectWithoutUserInput = {
    where: StepsWhereUniqueInput
    create: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput>
  }

  export type StepsCreateManyUserInputEnvelope = {
    data: StepsCreateManyUserInput | StepsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CaloriesCreateWithoutUserInput = {
    createdAt?: Date | string
    amr: number
    bmi: number
    actual?: number | null
    target: number
  }

  export type CaloriesUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    amr: number
    bmi: number
    actual?: number | null
    target: number
  }

  export type CaloriesCreateOrConnectWithoutUserInput = {
    where: CaloriesWhereUniqueInput
    create: XOR<CaloriesCreateWithoutUserInput, CaloriesUncheckedCreateWithoutUserInput>
  }

  export type CaloriesCreateManyUserInputEnvelope = {
    data: CaloriesCreateManyUserInput | CaloriesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WaterCreateWithoutUserInput = {
    createdAt?: Date | string
    waterActual: number
    target: number
  }

  export type WaterUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    waterActual: number
    target: number
  }

  export type WaterCreateOrConnectWithoutUserInput = {
    where: WaterWhereUniqueInput
    create: XOR<WaterCreateWithoutUserInput, WaterUncheckedCreateWithoutUserInput>
  }

  export type WaterCreateManyUserInputEnvelope = {
    data: WaterCreateManyUserInput | WaterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeditationCreateWithoutUserInput = {
    createdAt?: Date | string
    medicationActual: number
    target: number
  }

  export type MeditationUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    medicationActual: number
    target: number
  }

  export type MeditationCreateOrConnectWithoutUserInput = {
    where: MeditationWhereUniqueInput
    create: XOR<MeditationCreateWithoutUserInput, MeditationUncheckedCreateWithoutUserInput>
  }

  export type MeditationCreateManyUserInputEnvelope = {
    data: MeditationCreateManyUserInput | MeditationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoodCreateWithoutUserInput = {
    createdAt?: Date | string
    currentMood: $Enums.Todaymood
  }

  export type MoodUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    currentMood: $Enums.Todaymood
  }

  export type MoodCreateOrConnectWithoutUserInput = {
    where: MoodWhereUniqueInput
    create: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput>
  }

  export type MoodCreateManyUserInputEnvelope = {
    data: MoodCreateManyUserInput | MoodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutUserInput = {
    date?: Date | string
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: $Enums.Todaymood
    category?: number | null
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: number
    date?: Date | string
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: $Enums.Todaymood
    category?: number | null
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FoodConsumedCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    calories: number
    uniqueId: string
    food: FoodListCreateNestedOneWithoutFoodConsumedInput
  }

  export type FoodConsumedUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foodName: string
    calories: number
    uniqueId: string
  }

  export type FoodConsumedCreateOrConnectWithoutUserInput = {
    where: FoodConsumedWhereUniqueInput
    create: XOR<FoodConsumedCreateWithoutUserInput, FoodConsumedUncheckedCreateWithoutUserInput>
  }

  export type FoodConsumedCreateManyUserInputEnvelope = {
    data: FoodConsumedCreateManyUserInput | FoodConsumedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SleepUpsertWithWhereUniqueWithoutUserInput = {
    where: SleepWhereUniqueInput
    update: XOR<SleepUpdateWithoutUserInput, SleepUncheckedUpdateWithoutUserInput>
    create: XOR<SleepCreateWithoutUserInput, SleepUncheckedCreateWithoutUserInput>
  }

  export type SleepUpdateWithWhereUniqueWithoutUserInput = {
    where: SleepWhereUniqueInput
    data: XOR<SleepUpdateWithoutUserInput, SleepUncheckedUpdateWithoutUserInput>
  }

  export type SleepUpdateManyWithWhereWithoutUserInput = {
    where: SleepScalarWhereInput
    data: XOR<SleepUpdateManyMutationInput, SleepUncheckedUpdateManyWithoutUserInput>
  }

  export type SleepScalarWhereInput = {
    AND?: SleepScalarWhereInput | SleepScalarWhereInput[]
    OR?: SleepScalarWhereInput[]
    NOT?: SleepScalarWhereInput | SleepScalarWhereInput[]
    id?: IntFilter<"Sleep"> | number
    userId?: IntNullableFilter<"Sleep"> | number | null
    createdAt?: DateTimeFilter<"Sleep"> | Date | string
    sleepStart?: DateTimeFilter<"Sleep"> | Date | string
    sleepEnd?: DateTimeFilter<"Sleep"> | Date | string
    sleepActual?: IntFilter<"Sleep"> | number
    target?: IntFilter<"Sleep"> | number
  }

  export type StepsUpsertWithWhereUniqueWithoutUserInput = {
    where: StepsWhereUniqueInput
    update: XOR<StepsUpdateWithoutUserInput, StepsUncheckedUpdateWithoutUserInput>
    create: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput>
  }

  export type StepsUpdateWithWhereUniqueWithoutUserInput = {
    where: StepsWhereUniqueInput
    data: XOR<StepsUpdateWithoutUserInput, StepsUncheckedUpdateWithoutUserInput>
  }

  export type StepsUpdateManyWithWhereWithoutUserInput = {
    where: StepsScalarWhereInput
    data: XOR<StepsUpdateManyMutationInput, StepsUncheckedUpdateManyWithoutUserInput>
  }

  export type StepsScalarWhereInput = {
    AND?: StepsScalarWhereInput | StepsScalarWhereInput[]
    OR?: StepsScalarWhereInput[]
    NOT?: StepsScalarWhereInput | StepsScalarWhereInput[]
    id?: IntFilter<"Steps"> | number
    userId?: IntNullableFilter<"Steps"> | number | null
    createdAt?: DateTimeFilter<"Steps"> | Date | string
    stepsActual?: IntFilter<"Steps"> | number
    target?: IntFilter<"Steps"> | number
  }

  export type CaloriesUpsertWithWhereUniqueWithoutUserInput = {
    where: CaloriesWhereUniqueInput
    update: XOR<CaloriesUpdateWithoutUserInput, CaloriesUncheckedUpdateWithoutUserInput>
    create: XOR<CaloriesCreateWithoutUserInput, CaloriesUncheckedCreateWithoutUserInput>
  }

  export type CaloriesUpdateWithWhereUniqueWithoutUserInput = {
    where: CaloriesWhereUniqueInput
    data: XOR<CaloriesUpdateWithoutUserInput, CaloriesUncheckedUpdateWithoutUserInput>
  }

  export type CaloriesUpdateManyWithWhereWithoutUserInput = {
    where: CaloriesScalarWhereInput
    data: XOR<CaloriesUpdateManyMutationInput, CaloriesUncheckedUpdateManyWithoutUserInput>
  }

  export type CaloriesScalarWhereInput = {
    AND?: CaloriesScalarWhereInput | CaloriesScalarWhereInput[]
    OR?: CaloriesScalarWhereInput[]
    NOT?: CaloriesScalarWhereInput | CaloriesScalarWhereInput[]
    id?: IntFilter<"Calories"> | number
    userId?: IntNullableFilter<"Calories"> | number | null
    createdAt?: DateTimeFilter<"Calories"> | Date | string
    amr?: IntFilter<"Calories"> | number
    bmi?: IntFilter<"Calories"> | number
    actual?: IntNullableFilter<"Calories"> | number | null
    target?: IntFilter<"Calories"> | number
  }

  export type WaterUpsertWithWhereUniqueWithoutUserInput = {
    where: WaterWhereUniqueInput
    update: XOR<WaterUpdateWithoutUserInput, WaterUncheckedUpdateWithoutUserInput>
    create: XOR<WaterCreateWithoutUserInput, WaterUncheckedCreateWithoutUserInput>
  }

  export type WaterUpdateWithWhereUniqueWithoutUserInput = {
    where: WaterWhereUniqueInput
    data: XOR<WaterUpdateWithoutUserInput, WaterUncheckedUpdateWithoutUserInput>
  }

  export type WaterUpdateManyWithWhereWithoutUserInput = {
    where: WaterScalarWhereInput
    data: XOR<WaterUpdateManyMutationInput, WaterUncheckedUpdateManyWithoutUserInput>
  }

  export type WaterScalarWhereInput = {
    AND?: WaterScalarWhereInput | WaterScalarWhereInput[]
    OR?: WaterScalarWhereInput[]
    NOT?: WaterScalarWhereInput | WaterScalarWhereInput[]
    id?: IntFilter<"Water"> | number
    userId?: IntFilter<"Water"> | number
    createdAt?: DateTimeFilter<"Water"> | Date | string
    waterActual?: IntFilter<"Water"> | number
    target?: IntFilter<"Water"> | number
  }

  export type MeditationUpsertWithWhereUniqueWithoutUserInput = {
    where: MeditationWhereUniqueInput
    update: XOR<MeditationUpdateWithoutUserInput, MeditationUncheckedUpdateWithoutUserInput>
    create: XOR<MeditationCreateWithoutUserInput, MeditationUncheckedCreateWithoutUserInput>
  }

  export type MeditationUpdateWithWhereUniqueWithoutUserInput = {
    where: MeditationWhereUniqueInput
    data: XOR<MeditationUpdateWithoutUserInput, MeditationUncheckedUpdateWithoutUserInput>
  }

  export type MeditationUpdateManyWithWhereWithoutUserInput = {
    where: MeditationScalarWhereInput
    data: XOR<MeditationUpdateManyMutationInput, MeditationUncheckedUpdateManyWithoutUserInput>
  }

  export type MeditationScalarWhereInput = {
    AND?: MeditationScalarWhereInput | MeditationScalarWhereInput[]
    OR?: MeditationScalarWhereInput[]
    NOT?: MeditationScalarWhereInput | MeditationScalarWhereInput[]
    id?: IntFilter<"Meditation"> | number
    userId?: IntFilter<"Meditation"> | number
    createdAt?: DateTimeFilter<"Meditation"> | Date | string
    medicationActual?: IntFilter<"Meditation"> | number
    target?: IntFilter<"Meditation"> | number
  }

  export type MoodUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodWhereUniqueInput
    update: XOR<MoodUpdateWithoutUserInput, MoodUncheckedUpdateWithoutUserInput>
    create: XOR<MoodCreateWithoutUserInput, MoodUncheckedCreateWithoutUserInput>
  }

  export type MoodUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodWhereUniqueInput
    data: XOR<MoodUpdateWithoutUserInput, MoodUncheckedUpdateWithoutUserInput>
  }

  export type MoodUpdateManyWithWhereWithoutUserInput = {
    where: MoodScalarWhereInput
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodScalarWhereInput = {
    AND?: MoodScalarWhereInput | MoodScalarWhereInput[]
    OR?: MoodScalarWhereInput[]
    NOT?: MoodScalarWhereInput | MoodScalarWhereInput[]
    id?: IntFilter<"Mood"> | number
    userId?: IntFilter<"Mood"> | number
    createdAt?: DateTimeFilter<"Mood"> | Date | string
    currentMood?: EnumTodaymoodFilter<"Mood"> | $Enums.Todaymood
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: IntFilter<"Report"> | number
    date?: DateTimeFilter<"Report"> | Date | string
    userId?: IntFilter<"Report"> | number
    sleepActual?: IntFilter<"Report"> | number
    sleepTarget?: IntFilter<"Report"> | number
    stepsActual?: IntFilter<"Report"> | number
    stepsTarget?: IntFilter<"Report"> | number
    foodCaloriesActual?: IntFilter<"Report"> | number
    foodCaloriesTarget?: IntFilter<"Report"> | number
    waterActual?: IntFilter<"Report"> | number
    waterTarget?: IntFilter<"Report"> | number
    meditationActual?: IntFilter<"Report"> | number
    meditationTarget?: IntFilter<"Report"> | number
    mood?: EnumTodaymoodFilter<"Report"> | $Enums.Todaymood
    category?: FloatNullableFilter<"Report"> | number | null
  }

  export type FoodConsumedUpsertWithWhereUniqueWithoutUserInput = {
    where: FoodConsumedWhereUniqueInput
    update: XOR<FoodConsumedUpdateWithoutUserInput, FoodConsumedUncheckedUpdateWithoutUserInput>
    create: XOR<FoodConsumedCreateWithoutUserInput, FoodConsumedUncheckedCreateWithoutUserInput>
  }

  export type FoodConsumedUpdateWithWhereUniqueWithoutUserInput = {
    where: FoodConsumedWhereUniqueInput
    data: XOR<FoodConsumedUpdateWithoutUserInput, FoodConsumedUncheckedUpdateWithoutUserInput>
  }

  export type FoodConsumedUpdateManyWithWhereWithoutUserInput = {
    where: FoodConsumedScalarWhereInput
    data: XOR<FoodConsumedUpdateManyMutationInput, FoodConsumedUncheckedUpdateManyWithoutUserInput>
  }

  export type FoodConsumedScalarWhereInput = {
    AND?: FoodConsumedScalarWhereInput | FoodConsumedScalarWhereInput[]
    OR?: FoodConsumedScalarWhereInput[]
    NOT?: FoodConsumedScalarWhereInput | FoodConsumedScalarWhereInput[]
    id?: IntFilter<"FoodConsumed"> | number
    userId?: IntNullableFilter<"FoodConsumed"> | number | null
    createdAt?: DateTimeFilter<"FoodConsumed"> | Date | string
    updatedAt?: DateTimeFilter<"FoodConsumed"> | Date | string
    foodName?: StringFilter<"FoodConsumed"> | string
    calories?: IntFilter<"FoodConsumed"> | number
    uniqueId?: StringFilter<"FoodConsumed"> | string
  }

  export type UserCreateWithoutSleepInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    steps?: StepsCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSleepInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSleepInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSleepInput, UserUncheckedCreateWithoutSleepInput>
  }

  export type UserUpsertWithoutSleepInput = {
    update: XOR<UserUpdateWithoutSleepInput, UserUncheckedUpdateWithoutSleepInput>
    create: XOR<UserCreateWithoutSleepInput, UserUncheckedCreateWithoutSleepInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSleepInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSleepInput, UserUncheckedUpdateWithoutSleepInput>
  }

  export type UserUpdateWithoutSleepInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    steps?: StepsUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSleepInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStepsInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStepsInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStepsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
  }

  export type UserUpsertWithoutStepsInput = {
    update: XOR<UserUpdateWithoutStepsInput, UserUncheckedUpdateWithoutStepsInput>
    create: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStepsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStepsInput, UserUncheckedUpdateWithoutStepsInput>
  }

  export type UserUpdateWithoutStepsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStepsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFoodInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    steps?: StepsCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoodInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoodInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
  }

  export type UserUpsertWithoutFoodInput = {
    update: XOR<UserUpdateWithoutFoodInput, UserUncheckedUpdateWithoutFoodInput>
    create: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoodInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoodInput, UserUncheckedUpdateWithoutFoodInput>
  }

  export type UserUpdateWithoutFoodInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    steps?: StepsUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFoodConsumedInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    steps?: StepsCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoodConsumedInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoodConsumedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoodConsumedInput, UserUncheckedCreateWithoutFoodConsumedInput>
  }

  export type FoodListCreateWithoutFoodConsumedInput = {
    foodName: string
    calories: number
  }

  export type FoodListUncheckedCreateWithoutFoodConsumedInput = {
    id?: number
    foodName: string
    calories: number
  }

  export type FoodListCreateOrConnectWithoutFoodConsumedInput = {
    where: FoodListWhereUniqueInput
    create: XOR<FoodListCreateWithoutFoodConsumedInput, FoodListUncheckedCreateWithoutFoodConsumedInput>
  }

  export type UserUpsertWithoutFoodConsumedInput = {
    update: XOR<UserUpdateWithoutFoodConsumedInput, UserUncheckedUpdateWithoutFoodConsumedInput>
    create: XOR<UserCreateWithoutFoodConsumedInput, UserUncheckedCreateWithoutFoodConsumedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoodConsumedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoodConsumedInput, UserUncheckedUpdateWithoutFoodConsumedInput>
  }

  export type UserUpdateWithoutFoodConsumedInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    steps?: StepsUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoodConsumedInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodListUpsertWithoutFoodConsumedInput = {
    update: XOR<FoodListUpdateWithoutFoodConsumedInput, FoodListUncheckedUpdateWithoutFoodConsumedInput>
    create: XOR<FoodListCreateWithoutFoodConsumedInput, FoodListUncheckedCreateWithoutFoodConsumedInput>
    where?: FoodListWhereInput
  }

  export type FoodListUpdateToOneWithWhereWithoutFoodConsumedInput = {
    where?: FoodListWhereInput
    data: XOR<FoodListUpdateWithoutFoodConsumedInput, FoodListUncheckedUpdateWithoutFoodConsumedInput>
  }

  export type FoodListUpdateWithoutFoodConsumedInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
  }

  export type FoodListUncheckedUpdateWithoutFoodConsumedInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
  }

  export type FoodConsumedCreateWithoutFoodInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    calories: number
    uniqueId: string
    user?: UserCreateNestedOneWithoutFoodConsumedInput
  }

  export type FoodConsumedUncheckedCreateWithoutFoodInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calories: number
    uniqueId: string
  }

  export type FoodConsumedCreateOrConnectWithoutFoodInput = {
    where: FoodConsumedWhereUniqueInput
    create: XOR<FoodConsumedCreateWithoutFoodInput, FoodConsumedUncheckedCreateWithoutFoodInput>
  }

  export type FoodConsumedCreateManyFoodInputEnvelope = {
    data: FoodConsumedCreateManyFoodInput | FoodConsumedCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type FoodConsumedUpsertWithWhereUniqueWithoutFoodInput = {
    where: FoodConsumedWhereUniqueInput
    update: XOR<FoodConsumedUpdateWithoutFoodInput, FoodConsumedUncheckedUpdateWithoutFoodInput>
    create: XOR<FoodConsumedCreateWithoutFoodInput, FoodConsumedUncheckedCreateWithoutFoodInput>
  }

  export type FoodConsumedUpdateWithWhereUniqueWithoutFoodInput = {
    where: FoodConsumedWhereUniqueInput
    data: XOR<FoodConsumedUpdateWithoutFoodInput, FoodConsumedUncheckedUpdateWithoutFoodInput>
  }

  export type FoodConsumedUpdateManyWithWhereWithoutFoodInput = {
    where: FoodConsumedScalarWhereInput
    data: XOR<FoodConsumedUpdateManyMutationInput, FoodConsumedUncheckedUpdateManyWithoutFoodInput>
  }

  export type UserCreateWithoutWaterInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    steps?: StepsCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWaterInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWaterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWaterInput, UserUncheckedCreateWithoutWaterInput>
  }

  export type UserUpsertWithoutWaterInput = {
    update: XOR<UserUpdateWithoutWaterInput, UserUncheckedUpdateWithoutWaterInput>
    create: XOR<UserCreateWithoutWaterInput, UserUncheckedCreateWithoutWaterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWaterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWaterInput, UserUncheckedUpdateWithoutWaterInput>
  }

  export type UserUpdateWithoutWaterInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    steps?: StepsUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMeditationInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    steps?: StepsCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeditationInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeditationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeditationInput, UserUncheckedCreateWithoutMeditationInput>
  }

  export type UserUpsertWithoutMeditationInput = {
    update: XOR<UserUpdateWithoutMeditationInput, UserUncheckedUpdateWithoutMeditationInput>
    create: XOR<UserCreateWithoutMeditationInput, UserUncheckedCreateWithoutMeditationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeditationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeditationInput, UserUncheckedUpdateWithoutMeditationInput>
  }

  export type UserUpdateWithoutMeditationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    steps?: StepsUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeditationInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMoodInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    steps?: StepsCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    report?: ReportCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoodInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    report?: ReportUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoodInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoodInput, UserUncheckedCreateWithoutMoodInput>
  }

  export type UserUpsertWithoutMoodInput = {
    update: XOR<UserUpdateWithoutMoodInput, UserUncheckedUpdateWithoutMoodInput>
    create: XOR<UserCreateWithoutMoodInput, UserUncheckedCreateWithoutMoodInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoodInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoodInput, UserUncheckedUpdateWithoutMoodInput>
  }

  export type UserUpdateWithoutMoodInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    steps?: StepsUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    report?: ReportUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    report?: ReportUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReportInput = {
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepCreateNestedManyWithoutUserInput
    steps?: StepsCreateNestedManyWithoutUserInput
    food?: CaloriesCreateNestedManyWithoutUserInput
    water?: WaterCreateNestedManyWithoutUserInput
    meditation?: MeditationCreateNestedManyWithoutUserInput
    mood?: MoodCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportInput = {
    id?: number
    username: string
    email: string
    googleId?: string | null
    password?: string | null
    isEmailVerified?: boolean | null
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nickname?: string | null
    weight?: number | null
    height?: number | null
    gender?: $Enums.Gender | null
    age?: number | null
    activeness?: $Enums.Activeness | null
    sleep?: SleepUncheckedCreateNestedManyWithoutUserInput
    steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    food?: CaloriesUncheckedCreateNestedManyWithoutUserInput
    water?: WaterUncheckedCreateNestedManyWithoutUserInput
    meditation?: MeditationUncheckedCreateNestedManyWithoutUserInput
    mood?: MoodUncheckedCreateNestedManyWithoutUserInput
    foodConsumed?: FoodConsumedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
  }

  export type UserUpsertWithoutReportInput = {
    update: XOR<UserUpdateWithoutReportInput, UserUncheckedUpdateWithoutReportInput>
    create: XOR<UserCreateWithoutReportInput, UserUncheckedCreateWithoutReportInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportInput, UserUncheckedUpdateWithoutReportInput>
  }

  export type UserUpdateWithoutReportInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUpdateManyWithoutUserNestedInput
    steps?: StepsUpdateManyWithoutUserNestedInput
    food?: CaloriesUpdateManyWithoutUserNestedInput
    water?: WaterUpdateManyWithoutUserNestedInput
    meditation?: MeditationUpdateManyWithoutUserNestedInput
    mood?: MoodUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    activeness?: NullableEnumActivenessFieldUpdateOperationsInput | $Enums.Activeness | null
    sleep?: SleepUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    food?: CaloriesUncheckedUpdateManyWithoutUserNestedInput
    water?: WaterUncheckedUpdateManyWithoutUserNestedInput
    meditation?: MeditationUncheckedUpdateManyWithoutUserNestedInput
    mood?: MoodUncheckedUpdateManyWithoutUserNestedInput
    foodConsumed?: FoodConsumedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SleepCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    sleepStart?: Date | string
    sleepEnd: Date | string
    sleepActual: number
    target: number
  }

  export type StepsCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    stepsActual: number
    target: number
  }

  export type CaloriesCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    amr: number
    bmi: number
    actual?: number | null
    target: number
  }

  export type WaterCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    waterActual: number
    target: number
  }

  export type MeditationCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    medicationActual: number
    target: number
  }

  export type MoodCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    currentMood: $Enums.Todaymood
  }

  export type ReportCreateManyUserInput = {
    id?: number
    date?: Date | string
    sleepActual: number
    sleepTarget: number
    stepsActual: number
    stepsTarget: number
    foodCaloriesActual: number
    foodCaloriesTarget: number
    waterActual: number
    waterTarget: number
    meditationActual: number
    meditationTarget: number
    mood: $Enums.Todaymood
    category?: number | null
  }

  export type FoodConsumedCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    foodName: string
    calories: number
    uniqueId: string
  }

  export type SleepUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type SleepUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type SleepUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepStart?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type StepsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepsActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type StepsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepsActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type StepsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepsActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CaloriesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amr?: IntFieldUpdateOperationsInput | number
    bmi?: IntFieldUpdateOperationsInput | number
    actual?: NullableIntFieldUpdateOperationsInput | number | null
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CaloriesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amr?: IntFieldUpdateOperationsInput | number
    bmi?: IntFieldUpdateOperationsInput | number
    actual?: NullableIntFieldUpdateOperationsInput | number | null
    target?: IntFieldUpdateOperationsInput | number
  }

  export type CaloriesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amr?: IntFieldUpdateOperationsInput | number
    bmi?: IntFieldUpdateOperationsInput | number
    actual?: NullableIntFieldUpdateOperationsInput | number | null
    target?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type WaterUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MeditationUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MeditationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MeditationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationActual?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
  }

  export type MoodUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentMood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
  }

  export type MoodUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentMood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
  }

  export type MoodUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentMood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
  }

  export type ReportUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    sleepTarget?: IntFieldUpdateOperationsInput | number
    stepsActual?: IntFieldUpdateOperationsInput | number
    stepsTarget?: IntFieldUpdateOperationsInput | number
    foodCaloriesActual?: IntFieldUpdateOperationsInput | number
    foodCaloriesTarget?: IntFieldUpdateOperationsInput | number
    waterActual?: IntFieldUpdateOperationsInput | number
    waterTarget?: IntFieldUpdateOperationsInput | number
    meditationActual?: IntFieldUpdateOperationsInput | number
    meditationTarget?: IntFieldUpdateOperationsInput | number
    mood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    category?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    sleepTarget?: IntFieldUpdateOperationsInput | number
    stepsActual?: IntFieldUpdateOperationsInput | number
    stepsTarget?: IntFieldUpdateOperationsInput | number
    foodCaloriesActual?: IntFieldUpdateOperationsInput | number
    foodCaloriesTarget?: IntFieldUpdateOperationsInput | number
    waterActual?: IntFieldUpdateOperationsInput | number
    waterTarget?: IntFieldUpdateOperationsInput | number
    meditationActual?: IntFieldUpdateOperationsInput | number
    meditationTarget?: IntFieldUpdateOperationsInput | number
    mood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    category?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepActual?: IntFieldUpdateOperationsInput | number
    sleepTarget?: IntFieldUpdateOperationsInput | number
    stepsActual?: IntFieldUpdateOperationsInput | number
    stepsTarget?: IntFieldUpdateOperationsInput | number
    foodCaloriesActual?: IntFieldUpdateOperationsInput | number
    foodCaloriesTarget?: IntFieldUpdateOperationsInput | number
    waterActual?: IntFieldUpdateOperationsInput | number
    waterTarget?: IntFieldUpdateOperationsInput | number
    meditationActual?: IntFieldUpdateOperationsInput | number
    meditationTarget?: IntFieldUpdateOperationsInput | number
    mood?: EnumTodaymoodFieldUpdateOperationsInput | $Enums.Todaymood
    category?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FoodConsumedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    food?: FoodListUpdateOneRequiredWithoutFoodConsumedNestedInput
  }

  export type FoodConsumedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodConsumedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodConsumedCreateManyFoodInput = {
    id?: number
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calories: number
    uniqueId: string
  }

  export type FoodConsumedUpdateWithoutFoodInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutFoodConsumedNestedInput
  }

  export type FoodConsumedUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodConsumedUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodListCountOutputTypeDefaultArgs instead
     */
    export type FoodListCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodListCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SleepDefaultArgs instead
     */
    export type SleepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SleepDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StepsDefaultArgs instead
     */
    export type StepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StepsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CaloriesDefaultArgs instead
     */
    export type CaloriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CaloriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodConsumedDefaultArgs instead
     */
    export type FoodConsumedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodConsumedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodListDefaultArgs instead
     */
    export type FoodListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaterDefaultArgs instead
     */
    export type WaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeditationDefaultArgs instead
     */
    export type MeditationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeditationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MoodDefaultArgs instead
     */
    export type MoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MoodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportDefaultArgs instead
     */
    export type ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}